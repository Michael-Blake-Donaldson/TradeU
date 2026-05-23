"use client";

import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import type { Session, User } from "@supabase/supabase-js";

import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import type { TierKey, VerificationStatus } from "@/lib/types/tradeu";

export type AuthStatus = "loading" | "authenticated" | "unauthenticated";

export type AuthProfile = {
  id: string;
  userId: string;
  displayName: string;
  fieldOfStudy: string;
  themeKey: string;
  tier: TierKey;
  verificationStatus: VerificationStatus;
};

export type AuthContextValue = {
  status: AuthStatus;
  isLoading: boolean;
  session: Session | null;
  user: User | null;
  profile: AuthProfile | null;
  isEmailConfirmed: boolean;
  signOut: () => Promise<void>;
  refreshSession: () => Promise<void>;
  refreshProfile: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

type ProfileRow = {
  id: string;
  user_id: string;
  display_name: string;
  field_of_study: string;
  theme_key: string;
  tier: TierKey;
  verification_status: VerificationStatus;
};

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter();
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);

  const [status, setStatus] = useState<AuthStatus>("loading");
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<AuthProfile | null>(null);

  const fetchProfile = useCallback(
    async (userId: string) => {
      if (!supabase) {
        setProfile(null);
        return;
      }

      const { data, error } = await supabase
        .from("profiles")
        .select("id, user_id, display_name, field_of_study, theme_key, tier, verification_status")
        .eq("user_id", userId)
        .maybeSingle();

      const row = data as ProfileRow | null;

      if (error || !row) {
        setProfile(null);
        return;
      }

      setProfile({
        id: row.id,
        userId: row.user_id,
        displayName: row.display_name,
        fieldOfStudy: row.field_of_study,
        themeKey: row.theme_key,
        tier: row.tier,
        verificationStatus: row.verification_status,
      });
    },
    [supabase],
  );

  const applySession = useCallback(
    async (nextSession: Session | null) => {
      setSession(nextSession);
      setUser(nextSession?.user ?? null);

      if (!nextSession?.user) {
        setProfile(null);
        setStatus("unauthenticated");
        return;
      }

      setStatus("authenticated");
      await fetchProfile(nextSession.user.id);
    },
    [fetchProfile],
  );

  const refreshSession = useCallback(async () => {
    if (!supabase) {
      setStatus("unauthenticated");
      setSession(null);
      setUser(null);
      setProfile(null);
      return;
    }

    setStatus("loading");
    const { data } = await supabase.auth.getSession();
    await applySession(data.session);
  }, [applySession, supabase]);

  const refreshProfile = useCallback(async () => {
    if (!user) {
      setProfile(null);
      return;
    }

    await fetchProfile(user.id);
  }, [fetchProfile, user]);

  const signOut = useCallback(async () => {
    if (!supabase) {
      return;
    }

    await supabase.auth.signOut();
    setSession(null);
    setUser(null);
    setProfile(null);
    setStatus("unauthenticated");

    router.push("/login");
    router.refresh();
  }, [router, supabase]);

  useEffect(() => {
    let isMounted = true;

    const initialize = async () => {
      if (!supabase) {
        return;
      }

      const { data } = await supabase.auth.getSession();
      if (!isMounted) {
        return;
      }

      await applySession(data.session);
    };

    void initialize();

    if (!supabase) {
      return;
    }

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      void applySession(nextSession);
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, [applySession, supabase]);

  const value: AuthContextValue = {
    status,
    isLoading: status === "loading",
    session,
    user,
    profile,
    isEmailConfirmed: Boolean(user?.email_confirmed_at),
    signOut,
    refreshSession,
    refreshProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}