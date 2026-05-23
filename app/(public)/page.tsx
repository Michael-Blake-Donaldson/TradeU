import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  Shield,
  Star,
} from "lucide-react";

import {
  howItWorksSteps,
  launchCategories,
  membershipBenefits,
  socialProof,
  statusLabels,
  trustHighlights,
  valueMoments,
  waitlistStats,
} from "@/lib/constants/tradeu";

export default function HomePage() {
  return (
    <div className="pb-20">
      <section className="grid-ambient overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="fade-up flex flex-col justify-center gap-8">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-indigo-200 bg-white/85 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
              <BadgeCheck className="h-4 w-4 text-secondary" />
              Student-first marketplace for real experience
            </div>
            <div className="space-y-6">
              <h1 className="section-heading max-w-3xl text-balance text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
                Trade skills. Gain experience.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                TradeU helps students exchange practical skills, earn trade credits,
                build portfolio proof, and grow reputation before they enter the
                workforce.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-white transition hover:bg-primary-strong"
              >
                Join TradeU
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                See how it works
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {valueMoments.map((moment) => (
                <div
                  key={moment}
                  className="surface rounded-3xl px-4 py-4 text-sm leading-6 text-slate-700"
                >
                  <div className="mb-2 inline-flex rounded-full bg-indigo-50 p-2 text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  {moment}
                </div>
              ))}
            </div>
          </div>

          <div className="fade-up flex items-center lg:justify-end">
            <div className="surface relative w-full overflow-hidden rounded-[32px] p-6 sm:p-8">
              <div className="absolute inset-x-6 top-6 h-32 rounded-full bg-indigo-100 blur-3xl" />
              <div className="relative space-y-6">
                <div className="flex items-start justify-between gap-4 rounded-[28px] bg-slate-950 px-5 py-5 text-white">
                  <div>
                    <p className="text-sm text-slate-300">Recommended next trade</p>
                    <p className="mt-2 text-xl font-semibold">Resume review for logo refresh</p>
                    <p className="mt-2 text-sm text-slate-300">
                      Hybrid trade with 60 credits held until completion.
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-200">
                    Active
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[28px] bg-hero-wash p-5">
                    <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                      <Star className="h-4 w-4 text-warning" />
                      Reputation growth
                    </div>
                    <p className="mt-4 text-3xl font-semibold text-ink">4.9</p>
                    <p className="mt-2 text-sm text-slate-600">
                      Average rating across completed student trades.
                    </p>
                  </div>
                  <div className="rounded-[28px] bg-emerald-50 p-5">
                    <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                      <Clock3 className="h-4 w-4 text-success" />
                      Trade credits
                    </div>
                    <p className="mt-4 text-3xl font-semibold text-ink">420</p>
                    <p className="mt-2 text-sm text-slate-600">
                      Earned through work completed for other students.
                    </p>
                  </div>
                </div>

                <div className="rounded-[28px] border border-slate-200 bg-white p-5">
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <Shield className="h-4 w-4 text-secondary" />
                    Trust system
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {statusLabels.map((status) => (
                      <span
                        key={status}
                        className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600"
                      >
                        {status}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="surface grid gap-6 rounded-[32px] p-6 sm:grid-cols-2 lg:grid-cols-4">
          {waitlistStats.map((item) => (
            <div key={item.label}>
              <p className="section-heading text-3xl font-semibold text-ink">{item.value}</p>
              <p className="mt-2 text-sm text-muted">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Launch categories
            </p>
            <h2 className="section-heading text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Built around the six categories the MVP can make feel alive.
            </h2>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {launchCategories.map((category) => {
            const Icon = category.icon;
            return (
              <article key={category.key} className="surface rounded-[30px] p-6">
                <div className="flex items-start justify-between gap-4">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: `${category.accent}20`, color: category.accent }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  {category.safetyNote ? (
                    <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                      Guided only
                    </span>
                  ) : null}
                </div>
                <h3 className="section-heading mt-6 text-2xl font-semibold text-ink">
                  {category.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{category.description}</p>
                {category.safetyNote ? (
                  <p className="mt-4 text-sm font-medium text-amber-700">{category.safetyNote}</p>
                ) : null}
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="surface rounded-[32px] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              How it works
            </p>
            <h2 className="section-heading mt-4 text-3xl font-semibold tracking-tight text-ink">
              A guided student flow from signup to finished trade.
            </h2>
            <div className="mt-8 space-y-4">
              {howItWorksSteps.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-3xl bg-slate-50 px-4 py-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <p className="pt-1 text-sm leading-6 text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="surface rounded-[32px] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Why students join
            </p>
            <div className="mt-6 grid gap-4">
              {membershipBenefits.map((benefit) => (
                <article key={benefit.title} className="rounded-[28px] border border-slate-200 px-5 py-5">
                  <h3 className="section-heading text-xl font-semibold text-ink">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{benefit.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="surface rounded-[32px] bg-slate-950 p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">
              Trust and safety
            </p>
            <h2 className="section-heading mt-4 text-3xl font-semibold tracking-tight">
              Designed to keep communication accountable and expectations clear.
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {trustHighlights.map((highlight) => (
                <div key={highlight} className="rounded-[28px] bg-white/8 px-5 py-5 text-sm leading-6 text-slate-200">
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {socialProof.map((story) => (
              <blockquote key={story.name} className="surface rounded-[30px] p-6">
                <p className="text-base leading-7 text-slate-700">“{story.quote}”</p>
                <footer className="mt-4 text-sm text-muted">
                  <span className="font-semibold text-ink">{story.name}</span>
                  <span> · {story.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="surface rounded-[36px] bg-gradient-to-r from-primary to-sky-500 px-8 py-10 text-white sm:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-100">
                Final call to action
              </p>
              <h2 className="section-heading mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Start trading skills with students who want to grow, not just transact.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-primary transition hover:bg-slate-100"
              >
                Create your profile
              </Link>
              <Link
                href="/waitlist"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Join the launch waitlist
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}