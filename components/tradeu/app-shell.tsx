"use client";

import Link from "next/link";
import {
  Bell,
  Compass,
  LayoutDashboard,
  LogOut,
  MessagesSquare,
  MoveRight,
  Shield,
  UserRound,
} from "lucide-react";

import { useAuth } from "@/hooks/use-auth";
import { currentProfile } from "@/lib/mock/tradeu";
import { fieldThemes } from "@/lib/constants/tradeu";
import { VerificationBadge } from "@/components/tradeu/status-badge";

const appNavBase = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/onboarding", label: "Onboarding", icon: UserRound },
  { href: "/browse", label: "Browse", icon: Compass },
  { href: "/trades", label: "Trades", icon: Bell },
  { href: "/messages", label: "Messages", icon: MessagesSquare },
  { href: "/admin", label: "Admin", icon: Shield },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const { profile, user, signOut } = useAuth();
  const shellProfile = {
    id: profile?.id ?? currentProfile.id,
    name: profile?.displayName ?? currentProfile.name,
    fieldOfStudy: profile?.fieldOfStudy ?? currentProfile.fieldOfStudy,
    themeKey: profile?.themeKey ?? currentProfile.themeKey,
    tier: profile?.tier ?? currentProfile.tier,
    verificationStatus: profile?.verificationStatus ?? currentProfile.verificationStatus,
    schoolName: currentProfile.school.name,
    credits: currentProfile.credits,
  };
  const theme = fieldThemes[shellProfile.themeKey];
  const profileHref = `/profile/${shellProfile.id}`;
  const appNav = [...appNavBase, { href: profileHref, label: "Profile", icon: UserRound }];

  return (
    <div className="min-h-screen bg-transparent">
      <div className="mx-auto grid min-h-screen max-w-[1600px] gap-5 px-4 py-4 lg:grid-cols-[320px_minmax(0,1fr)] lg:px-8">
        <aside className="surface-soft path-network rounded-[34px] p-5 lg:sticky lg:top-4 lg:h-[calc(100vh-2rem)]">
          <div
            className="relative z-10 rounded-[28px] border p-5"
            style={{ borderColor: `${theme.primary}40`, background: `${theme.accent}1f` }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">TradeU workspace</p>
            <p className="mt-2 section-heading text-2xl font-semibold text-ink">Student command center</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <VerificationBadge status={shellProfile.verificationStatus} />
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                {shellProfile.tier}
              </span>
            </div>
            <div className="mt-5">
              <p className="text-sm font-semibold text-ink">{shellProfile.name}</p>
              <p className="text-sm text-slate-600">{shellProfile.fieldOfStudy}</p>
              <p className="text-sm text-slate-600">{shellProfile.schoolName}</p>
              <p className="mt-2 text-xs text-muted">{user?.email ?? "No email available"}</p>
            </div>
          </div>

          <nav className="relative z-10 mt-6 grid gap-2">
            {appNav.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-transparent bg-white/70 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-primary/30 hover:bg-white hover:text-primary"
                >
                  <span className="inline-flex items-center gap-3">
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </span>
                  <MoveRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
                </Link>
              );
            })}
          </nav>

          <div className="relative z-10 mt-6 rounded-[28px] bg-slate-950 px-5 py-5 text-white">
            <p className="text-sm text-slate-300">Current credit balance</p>
            <p className="mt-2 text-3xl font-semibold">{shellProfile.credits}</p>
            <p className="mt-3 text-sm text-slate-300">
              Credits remain a ledger-backed trust mechanism, not a fake currency layer.
            </p>
            <button
              onClick={() => void signOut()}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-slate-100 transition hover:bg-white/10"
            >
              <LogOut className="h-3.5 w-3.5" />
              Sign out
            </button>
          </div>
        </aside>

        <div className="flex min-w-0 flex-col gap-6">
          <header className="surface path-network rounded-[30px] px-6 py-6">
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Campus collaboration cockpit
                </p>
                <h1 className="section-heading text-[1.7rem] font-semibold text-ink sm:text-[2rem]">
                  Track opportunity flow, trust signals, and your next move in one workspace.
                </h1>
              </div>
              <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
                On-platform communication only
              </div>
            </div>
          </header>

          <main className="min-w-0 pb-6">{children}</main>
        </div>
      </div>
    </div>
  );
}