import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  CircleDot,
  MoveRight,
  Search,
  Shield,
  Star,
  TrendingUp,
} from "lucide-react";

import {
  collaborationActivity,
  communityStatsExpanded,
  degreeIdentity,
  discoverSignals,
  launchCategories,
  howItWorksSteps,
  socialProof,
  studentSpotlights,
  trustHighlights,
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
      <section className="path-network border-b border-slate-200/70 bg-white/78">
        <div className="mx-auto w-full max-w-[1600px] px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
          <div className="relative z-10 grid gap-7 lg:grid-cols-[1.18fr_0.82fr]">
            <div className="fade-up space-y-7">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-700">
                <BadgeCheck className="h-4 w-4 text-secondary" />
                Verified campus collaboration
              </div>

              <h1 className="type-display max-w-5xl text-balance font-semibold text-ink">
                A modern campus ecosystem where opportunity is moving around you.
              </h1>

              <p className="type-subtitle max-w-3xl text-slate-700">
                TradeU connects students through trusted exchanges, not generic gigs. Every request creates movement
                between skills, proof of work, and reputation.
              </p>

              <div className="surface rounded-[28px] p-3">
                <div className="flex flex-col gap-3 md:flex-row md:items-center">
                  <label htmlFor="skill-search" className="sr-only">
                    Search skills
                  </label>
                  <div className="flex flex-1 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3">
                    <Search className="h-4 w-4 text-muted" />
                    <input
                      id="skill-search"
                      type="text"
                      placeholder="What skill flow are you joining today?"
                      className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
                      readOnly
                    />
                  </div>
                  <Link
                    href="/signup"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-strong"
                  >
                    Enter TradeU
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {featuredSearches.map((term) => (
                    <span key={term} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
                      {term}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {degreeIdentity.map((identity) => (
                  <span
                    key={identity.key}
                    className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold"
                    style={{
                      color: identity.color,
                      backgroundColor: `${identity.color}18`,
                      border: `1px solid ${identity.color}40`,
                    }}
                  >
                    <CircleDot className="h-3.5 w-3.5" />
                    {identity.label}
                  </span>
                ))}
              </div>
            </div>

            <aside className="fade-up surface-dark path-drift rounded-[32px] p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">Ecosystem pulse</p>
              <p className="mt-3 text-3xl font-semibold leading-tight text-white">
                Collaboration pathways are active across majors every hour.
              </p>
              <div className="mt-6 space-y-3">
                {featuredGigs.map((gig) => (
                  <article key={gig.title} className="rounded-2xl border border-white/15 bg-white/5 px-4 py-4">
                    <h3 className="text-base font-semibold text-white">{gig.title}</h3>
                    <p className="mt-1 text-sm text-slate-300">{gig.provider}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-300">
                      <span className="inline-flex items-center gap-1 text-amber-300">
                        <Star className="h-3.5 w-3.5 fill-current" />
                        {gig.rating}
                      </span>
                      <span>{gig.volume}</span>
                      <span className="rounded-full bg-white/10 px-2 py-1">{gig.price}</span>
                    </div>
                  </article>
                ))}
              </div>
              <div className="mt-4 inline-flex items-center gap-1 rounded-full bg-emerald-300/15 px-3 py-1 text-xs font-semibold text-emerald-200">
                <TrendingUp className="h-3.5 w-3.5" />
                26% more collaborative matches this week
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1600px] px-4 py-14 sm:px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Discover zone</p>
            <h2 className="type-section mt-2 max-w-4xl font-semibold text-ink">
              Discover how value moves between students before a single message is sent.
            </h2>
            <div className="mt-6 space-y-3">
              {discoverSignals.map((signal) => (
                <div key={signal.title} className="surface-soft rounded-[24px] px-5 py-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-lg font-semibold text-ink">{signal.title}</p>
                      <p className="mt-1 text-sm leading-7 text-slate-600">{signal.detail}</p>
                    </div>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-primary">{signal.metric}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="surface rounded-[30px] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Explore skill lanes</p>
            <div className="mt-4 space-y-2">
              {launchCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <div
                    key={category.key}
                    className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 transition hover:border-primary/30"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="inline-flex h-9 w-9 items-center justify-center rounded-xl"
                        style={{ backgroundColor: `${category.accent}20`, color: category.accent }}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-ink">{category.name}</p>
                        <p className="text-xs text-slate-600">{category.description}</p>
                      </div>
                    </div>
                    <MoveRight className="h-4 w-4 text-slate-500" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1600px] px-4 py-14 sm:px-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Student spotlight</p>
            <h2 className="type-section mt-2 max-w-4xl font-semibold text-ink">
              Identity surfaces built around trust, outcomes, and collaboration momentum.
            </h2>
          </div>

          <figure className="surface-soft overflow-hidden rounded-[30px] border border-slate-200/70">
            <Image
              src="/herosection.png"
              alt="Two students collaborating on guitar practice in a campus home setting"
              width={1152}
              height={768}
              className="h-56 w-full object-cover sm:h-64 lg:h-72"
              priority={false}
            />
          </figure>
        </div>

        <div className="mt-7 space-y-3">
          {studentSpotlights.map((student, index) => (
            <article key={student.name} className="surface rounded-[30px] px-5 py-5 sm:px-7">
              <div className="grid gap-4 md:grid-cols-[0.34fr_0.66fr] md:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Student {index + 1}</p>
                  <p className="mt-2 text-2xl font-semibold text-ink">{student.name}</p>
                  <p className="text-sm text-slate-600">{student.degree}</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-ink">{student.headline}</p>
                  <p className="mt-2 text-sm font-medium text-emerald-700">{student.trust}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1600px] px-4 py-14 sm:px-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="surface-dark rounded-[32px] p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">Collaboration activity</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-white">
              Live flows between disciplines, documented with trust checkpoints.
            </h2>
            <div className="mt-5 space-y-2 text-sm text-slate-300">
              {trustHighlights.map((item) => (
                <p key={item} className="inline-flex items-center gap-2">
                  <Shield className="h-4 w-4 text-emerald-300" />
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="surface rounded-[32px] p-6">
            <div className="space-y-2">
              {collaborationActivity.map((entry, index) => (
                <div key={`${entry.lane}-${entry.time}`} className="flex gap-3 rounded-2xl border border-slate-200 px-4 py-4">
                  <div className="flex flex-col items-center pt-0.5">
                    <span className="h-3 w-3 rounded-full bg-primary" />
                    {index < collaborationActivity.length - 1 ? (
                      <span className="mt-1 h-10 w-px bg-slate-200" />
                    ) : null}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{entry.lane}</p>
                    <p className="mt-1 text-sm leading-7 text-slate-700">{entry.action}</p>
                    <p className="mt-1 text-xs text-muted">{entry.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-2xl bg-slate-100 px-4 py-3 text-sm text-slate-700">
              4.9/5 average trust rating from post-trade feedback this week.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1600px] px-4 py-14 sm:px-6 lg:px-10">
        <div className="surface rounded-[34px] p-8 sm:p-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Community stats</p>
              <h2 className="type-section mt-2 max-w-3xl font-semibold text-ink">
                Trust is measurable when the ecosystem is designed for collaborative outcomes.
              </h2>
            </div>
            <div className="inline-flex gap-3">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-strong"
              >
                Build your profile
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-primary/40 hover:text-primary"
              >
                Learn the flow
              </Link>
            </div>
          </div>

          <div className="mt-7 grid gap-3 md:grid-cols-2">
            {communityStatsExpanded.map((item) => (
              <div key={item.label} className="surface-soft rounded-[24px] px-5 py-5">
                <p className="section-heading text-4xl font-semibold text-ink">{item.value}</p>
                <p className="mt-2 text-sm font-semibold text-slate-700">{item.label}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.context}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 grid gap-3 lg:grid-cols-2">
            {howItWorksSteps.map((step, index) => (
              <div key={step} className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm leading-6 text-slate-700">
                <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">
                  {index + 1}
                </span>
                {step}
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-3 lg:grid-cols-3">
            {socialProof.map((story) => (
              <blockquote key={story.name} className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm text-slate-700">
                <p>{`"${story.quote}"`}</p>
                <footer className="mt-3 text-xs text-muted">
                  <span className="font-semibold text-ink">{story.name}</span>
                  <span>{` • ${story.role}`}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
