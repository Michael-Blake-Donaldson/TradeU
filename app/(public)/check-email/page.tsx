import Link from "next/link";
import { MailCheck, RefreshCcw } from "lucide-react";

type CheckEmailPageProps = {
  searchParams?: Promise<{ email?: string }>;
};

export default async function CheckEmailPage({ searchParams }: CheckEmailPageProps) {
  const params = (await searchParams) ?? {};
  const email = params.email ?? "your school email";

  return (
    <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="surface rounded-[32px] p-8">
        <div className="inline-flex rounded-2xl bg-hero-wash p-3 text-primary">
          <MailCheck className="h-6 w-6" />
        </div>

        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
          Check your email
        </p>
        <h1 className="section-heading mt-4 text-3xl font-semibold tracking-tight text-ink">
          Confirm your TradeU account to continue.
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          We sent a confirmation link to <span className="font-semibold text-ink">{email}</span>.
          Open the link and we will automatically sign you in and redirect you back to TradeU.
        </p>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-600">
          <p className="font-semibold text-slate-700">If you do not see it:</p>
          <p className="mt-2">Check your spam, junk, or promotions folders.</p>
          <p className="mt-1">Then use the resend option from the login page.</p>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/login"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-white transition hover:bg-primary-strong"
          >
            <RefreshCcw className="h-4 w-4" />
            Go to login and resend
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Back to home
          </Link>
        </div>
      </section>
    </div>
  );
}
