import { ArrowRight, Clock3, Star } from "lucide-react";

import { fieldThemes } from "@/lib/constants/tradeu";
import type { SkillListing } from "@/lib/types/tradeu";
import { VerificationBadge } from "@/components/tradeu/status-badge";

export function ListingCard({ listing }: { listing: SkillListing }) {
  const theme = fieldThemes[listing.providerTheme];

  return (
    <article className="surface rounded-[30px] p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
            {listing.category.replace("-", " ")}
          </p>
          <h3 className="section-heading mt-2 text-2xl font-semibold text-ink">
            {listing.title}
          </h3>
        </div>
        <div
          className="rounded-full px-3 py-1 text-xs font-semibold"
          style={{ backgroundColor: `${theme.accent}22`, color: theme.primary }}
        >
          {listing.level}
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-600">{listing.description}</p>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <VerificationBadge status={listing.verificationStatus} />
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
          {listing.tradePreference}
        </span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
          {listing.creditRange}
        </span>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-600">
        <span className="font-medium text-ink">{listing.providerName}</span>
        <span>{listing.providerSchool}</span>
        <span className="inline-flex items-center gap-1">
          <Star className="h-4 w-4 text-warning" />
          {listing.rating.toFixed(1)} ({listing.reviewCount})
        </span>
        <span className="inline-flex items-center gap-1">
          <Clock3 className="h-4 w-4 text-slate-400" />
          {listing.expectedTime}
        </span>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-muted">Responds {listing.responseTime}</p>
        <button className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-strong">
          Request trade
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </article>
  );
}