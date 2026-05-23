import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="surface rounded-[32px] p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Join TradeU</p>
        <h1 className="section-heading mt-4 text-3xl font-semibold tracking-tight text-ink">
          Build a profile that shows what you study, what you offer, and what you want to learn.
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          The account creation and onboarding flow comes next, including school verification, field of
          study theme selection, skills offered, and skills wanted.
        </p>
        <div className="mt-8">
          <Link
            href="/how-it-works"
            className="inline-flex rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Review the onboarding flow
          </Link>
        </div>
      </section>
    </div>
  );
}