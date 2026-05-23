import Link from "next/link";

export default function WaitlistPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-4 py-16 sm:px-6 lg:px-8">
      <section className="surface rounded-[36px] p-8 sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
          Beta launch
        </p>
        <h1 className="section-heading mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Start with a waitlist that focuses the first TradeU community.
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
          The outline recommends a targeted beta launch so the marketplace feels active from day one.
          This page will become the intake point for early student cohorts, ambassadors, and category
          seed users.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/signup"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-semibold text-white transition hover:bg-primary-strong"
          >
            Create your profile
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Back to overview
          </Link>
        </div>
      </section>
    </div>
  );
}