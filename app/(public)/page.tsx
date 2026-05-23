import Link from "next/link";
import { ArrowRight, BadgeCheck, Search, Shield, Star, TrendingUp } from "lucide-react";

import {
  howItWorksSteps,
  launchCategories,
  socialProof,
  trustHighlights,
  waitlistStats,
} from "@/lib/constants/tradeu";

const featuredSearches = [
  "Resume reviews",
  "UI design feedback",
  "Math tutoring",
  "Logo refresh",
  "Interview prep",
  "Photo editing",
];

const featuredGigs = [
  {
    title: "Portfolio review + internship readiness checklist",
    provider: "Maya, Business Analytics",
    rating: "4.9",
    volume: "128 trades",
    price: "from 40 credits",
  },
  {
    title: "Brand kit + social templates for campus orgs",
    provider: "Jules, Graphic Design",
    rating: "4.8",
    volume: "96 trades",
    price: "from 55 credits",
  },
  {
    title: "Mock technical interview with actionable rubric",
    provider: "Noah, Computer Science",
    rating: "5.0",
    volume: "82 trades",
    price: "from 60 credits",
  },
];

export default function HomePage() {
  return (
    <div className="pb-20">
      <section className="grid-ambient overflow-hidden border-b border-slate-200/80 bg-white/70">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
          <div className="fade-up space-y-8">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
              <BadgeCheck className="h-4 w-4 text-secondary" />
              Verified students. Real outcomes. No resume fluff.
            </div>

            <div className="space-y-5">
              <h1 className="section-heading max-w-3xl text-balance text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
                Find student talent fast,
                <span className="text-primary"> trade your way.</span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                TradeU is a student marketplace where every exchange builds trust,
                reputation, and portfolio proof through direct trades, credits, or hybrid deals.
              </p>
            </div>

            <div className="surface rounded-[28px] p-3">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <label htmlFor="skill-search" className="sr-only">
                  Search skills
                </label>
                <div className="flex flex-1 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-3">
                  <Search className="h-4 w-4 text-muted" />
                  <input
                    id="skill-search"
                    type="text"
                    placeholder="What do you need help with?"
                    className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
                    readOnly
                  />
                </div>
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-strong"
                >
                  Start trading
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {featuredSearches.map((term) => (
                  <span
                    key={term}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {term}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {waitlistStats.map((item) => (
                <div key={item.label} className="surface rounded-2xl px-4 py-4">
                  <p className="section-heading text-2xl font-semibold text-ink">{item.value}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-muted">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-up flex items-center lg:justify-end">
            <div className="surface w-full rounded-[30px] p-5 sm:p-6">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Trending trades
                </p>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  <TrendingUp className="h-3.5 w-3.5" />
                  +26% this week
                </span>
              </div>
              <div className="space-y-3">
                {featuredGigs.map((gig) => (
                  <article key={gig.title} className="rounded-2xl border border-slate-200 bg-white p-4">
                    <h3 className="section-heading text-lg font-semibold text-ink">{gig.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{gig.provider}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-600">
                      <span className="inline-flex items-center gap-1 text-amber-500">
                        <Star className="h-3.5 w-3.5 fill-current" />
                        {gig.rating}
                      </span>
                      <span>{gig.volume}</span>
                      <span className="rounded-full bg-hero-wash px-2.5 py-1 text-primary">
                        {gig.price}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Browse by category
            </p>
            <h2 className="section-heading mt-2 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Marketplace lanes built for student-to-student value.
            </h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {launchCategories.map((category) => {
            const Icon = category.icon;
            return (
              <article key={category.key} className="surface rounded-[28px] p-6">
                <div className="flex items-start justify-between gap-3">
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: `${category.accent}20`, color: category.accent }}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600">
                    Popular
                  </span>
                </div>
                <h3 className="section-heading mt-5 text-xl font-semibold text-ink">{category.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{category.description}</p>
                {category.safetyNote ? (
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-amber-700">
                    {category.safetyNote}
                  </p>
                ) : null}
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="surface rounded-[30px] bg-slate-950 p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-200">
              Trust and security
            </p>
            <h2 className="section-heading mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Structured by default so both students can trade with confidence.
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {trustHighlights.map((highlight) => (
                <div key={highlight} className="rounded-2xl bg-white/10 px-4 py-4 text-sm leading-6 text-slate-100">
                  {highlight}
                </div>
              ))}
            </div>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-400/15 px-4 py-2 text-sm font-semibold text-emerald-200">
              <Shield className="h-4 w-4" />
              Moderation + dispute support included from day one.
            </div>
          </div>

          <div className="surface rounded-[30px] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              How it works
            </p>
            <div className="mt-4 space-y-3">
              {howItWorksSteps.map((step, index) => (
                <div key={step} className="flex gap-3 rounded-2xl border border-slate-200 px-4 py-4">
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {socialProof.map((story) => (
            <blockquote key={story.name} className="surface rounded-[26px] p-6">
              <p className="text-base leading-7 text-slate-700">“{story.quote}”</p>
              <footer className="mt-4 text-sm text-muted">
                <span className="font-semibold text-ink">{story.name}</span>
                <span> · {story.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="surface rounded-[34px] bg-gradient-to-r from-primary to-primary-strong px-8 py-10 text-white sm:px-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
                Launch call
              </p>
              <h2 className="section-heading mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Join TradeU and turn your campus skills into real experience currency.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-slate-100"
              >
                Create profile
              </Link>
              <Link
                href="/waitlist"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Join waitlist
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
