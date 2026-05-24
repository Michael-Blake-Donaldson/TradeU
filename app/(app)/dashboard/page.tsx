"use client";

import Link from "next/link";
import { ArrowRight, CircleDot, MoveRight, Sparkles } from "lucide-react";

import { useAuth } from "@/hooks/use-auth";
import { ListingCard } from "@/components/tradeu/listing-card";
import { TradeStatusBadge, VerificationBadge } from "@/components/tradeu/status-badge";
import { currentProfile, dashboardChecklist, activeTrades, recommendedListings } from "@/lib/mock/tradeu";
import { fieldThemes } from "@/lib/constants/tradeu";

export default function DashboardPage() {
  const { profile, user } = useAuth();
  const dashboardProfile = {
    name: profile?.displayName ?? currentProfile.name,
    fieldOfStudy: profile?.fieldOfStudy ?? currentProfile.fieldOfStudy,
    themeKey: profile?.themeKey ?? currentProfile.themeKey,
    verificationStatus: profile?.verificationStatus ?? currentProfile.verificationStatus,
    tier: profile?.tier ?? currentProfile.tier,
    schoolName: currentProfile.school.name,
  };
  const theme = fieldThemes[dashboardProfile.themeKey];

  return (
    <div className="grid gap-6">
      <section className="grid gap-6 xl:grid-cols-[1.12fr_0.88fr]">
        <article
          className="surface path-network rounded-[34px] p-8"
          style={{ background: `linear-gradient(135deg, ${theme.accent}22, white 58%)` }}
        >
          <div className="relative z-10 flex flex-wrap items-start justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Welcome back
              </p>
              <h2 className="section-heading mt-3 text-4xl font-semibold text-ink sm:text-5xl">
                {dashboardProfile.name}
              </h2>
              <p className="mt-2 text-base text-slate-600">
                {dashboardProfile.fieldOfStudy} · {dashboardProfile.schoolName}
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-muted">
                {user?.email ?? "Email unavailable"}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <VerificationBadge status={dashboardProfile.verificationStatus} />
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                {dashboardProfile.tier}
              </span>
            </div>
          </div>

          <div className="relative z-10 mt-8 grid gap-4 sm:grid-cols-3">
            <div className="surface-soft rounded-[24px] px-5 py-5">
              <p className="text-sm text-muted">Credit balance</p>
              <p className="mt-2 text-3xl font-semibold text-ink">{currentProfile.credits}</p>
            </div>
            <div className="surface-soft rounded-[24px] px-5 py-5">
              <p className="text-sm text-muted">Completed trades</p>
              <p className="mt-2 text-3xl font-semibold text-ink">{currentProfile.completedTrades}</p>
            </div>
            <div className="surface-soft rounded-[24px] px-5 py-5">
              <p className="text-sm text-muted">Rating</p>
              <p className="mt-2 text-3xl font-semibold text-ink">{currentProfile.rating.toFixed(1)}</p>
            </div>
          </div>

          <div className="relative z-10 mt-8 rounded-[24px] bg-slate-950 px-5 py-5 text-white">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-slate-300">Experience progress</p>
                <p className="mt-2 text-xl font-semibold">{currentProfile.xpProgress}% to Expert</p>
              </div>
              <Sparkles className="h-5 w-5 text-emerald-300" />
            </div>
            <div className="mt-4 h-3 rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-sky-400"
                style={{ width: `${currentProfile.xpProgress}%` }}
              />
            </div>
          </div>

          <div className="relative z-10 mt-6 flex flex-wrap gap-3">
            <Link
              href="/listings/new"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary transition hover:bg-slate-100"
            >
              Create listing
              <MoveRight className="h-4 w-4" />
            </Link>
            <Link
              href="/trades/request"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Request trade
              <MoveRight className="h-4 w-4" />
            </Link>
          </div>
        </article>

        <article className="surface rounded-[32px] p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Profile checklist
              </p>
              <h2 className="section-heading mt-3 text-2xl font-semibold text-ink">
                Keep the marketplace learning from your profile.
              </h2>
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
              {dashboardChecklist.filter((item) => item.complete).length}/{dashboardChecklist.length}
            </span>
          </div>
          <div className="mt-6 grid gap-3">
            {dashboardChecklist.map((item) => (
              <div key={item.id} className="surface-soft flex items-center justify-between rounded-[24px] px-4 py-4">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-700">
                  <CircleDot className="h-4 w-4 text-primary" />
                  {item.label}
                </span>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    item.complete ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {item.complete ? "Done" : "Next"}
                </span>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
        <article className="surface rounded-[32px] p-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Recommended matches
              </p>
              <h2 className="section-heading mt-3 text-2xl font-semibold text-ink">
                Students aligned to your wanted skills and trust preferences.
              </h2>
            </div>
          </div>
          <div className="mt-6 grid gap-5">
            {recommendedListings.slice(0, 2).map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </article>

        <article className="surface path-network rounded-[32px] p-8">
          <div className="flex items-end justify-between gap-4">
            <div className="relative z-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Active trades
              </p>
              <h2 className="section-heading mt-3 text-2xl font-semibold text-ink">
                The dashboard should always tell the student what happens next.
              </h2>
            </div>
          </div>

          <div className="relative z-10 mt-6 grid gap-4">
            {activeTrades.map((trade) => (
              <article key={trade.id} className="surface-soft rounded-[28px] px-5 py-5">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="section-heading text-xl font-semibold text-ink">{trade.listingTitle}</h3>
                    <p className="mt-1 text-sm text-slate-600">Counterpart: {trade.counterpart}</p>
                  </div>
                  <TradeStatusBadge status={trade.status} />
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">{trade.successCriteria}</p>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-600">
                  <span>Due {trade.dueDate}</span>
                  <span>{trade.tradeType}</span>
                  <span>{trade.creditsHeld} credits held</span>
                </div>
                <div className="mt-5 flex items-center justify-between gap-4">
                  <p className="text-sm text-muted">{trade.lastUpdate}</p>
                  <Link
                    href="/trades/request"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
                  >
                    Open trade
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}