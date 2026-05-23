"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import { createSupabaseBrowserClient } from "@/lib/supabase/client";

const AUTH_CONFIRM_REDIRECT_PATH = "/auth/callback?next=/dashboard";

export function SignupForm() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!fullName.trim() || !email.trim() || !password) {
      toast.error("Complete all required fields.");
      return;
    }

    if (password.length < 8) {
      toast.error("Use at least 8 characters for your password.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    const supabase = createSupabaseBrowserClient();
    if (!supabase) {
      toast.error("Supabase is not configured. Add client env vars and try again.");
      return;
    }

    try {
      setIsSubmitting(true);

      const { data, error } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: {
          data: {
            full_name: fullName.trim(),
          },
          emailRedirectTo: `${window.location.origin}${AUTH_CONFIRM_REDIRECT_PATH}`,
        },
      });

      if (error) {
        if (error.message.toLowerCase().includes("invalid")) {
          toast.error("That email looks invalid. Double-check for typos and use your full school address.");
          return;
        }

        toast.error(error.message);
        return;
      }

      if (data.session) {
        toast.success("Account created. Welcome to TradeU.");
        router.push("/onboarding");
        router.refresh();
        return;
      }

      toast.success("Check your email to confirm your account. Also check spam/promotions folders.");
      router.push(`/check-email?email=${encodeURIComponent(email.trim())}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
      <label className="grid gap-2 text-sm font-medium text-slate-700">
        Full name
        <input
          type="text"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          autoComplete="name"
          required
          className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:border-primary focus:outline-none"
          placeholder="Avery Johnson"
        />
      </label>

      <label className="grid gap-2 text-sm font-medium text-slate-700">
        School email
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          autoComplete="email"
          required
          className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:border-primary focus:outline-none"
          placeholder="you@school.edu"
        />
      </label>

      <label className="grid gap-2 text-sm font-medium text-slate-700">
        Password
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="new-password"
          required
          className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:border-primary focus:outline-none"
          placeholder="At least 8 characters"
        />
      </label>

      <label className="grid gap-2 text-sm font-medium text-slate-700">
        Confirm password
        <input
          type="password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          autoComplete="new-password"
          required
          className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:border-primary focus:outline-none"
          placeholder="Re-enter your password"
        />
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-white transition hover:bg-primary-strong disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
        {isSubmitting ? "Creating account..." : "Join TradeU"}
      </button>

      <p className="text-center text-sm text-slate-600">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-primary hover:text-primary-strong">
          Log in
        </Link>
      </p>

      <p className="text-center text-xs text-slate-500">
        If your project has email confirmations enabled, we will send a verification email after signup.
      </p>
    </form>
  );
}
