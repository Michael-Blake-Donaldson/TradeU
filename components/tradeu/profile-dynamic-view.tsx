"use client";

import { useMemo, useState } from "react";

import {
  categoryThemeMap,
  fieldThemes,
  launchCategories,
  type CategoryKey,
  type ThemeKey,
} from "@/lib/constants/tradeu";
import type { ProfileSummary, SkillListing } from "@/lib/types/tradeu";
import { VerificationBadge } from "@/components/tradeu/status-badge";

type IndustryThemeOption = {
  category: CategoryKey;
  label: string;
  themeKey: ThemeKey;
};

const categoryLabelMap = new Map(launchCategories.map((category) => [category.key, category.name]));

function toThemeOption(category: CategoryKey): IndustryThemeOption {
  return {
    category,
    label: categoryLabelMap.get(category) ?? category,
    themeKey: categoryThemeMap[category],
  };
}

type ProfileDynamicViewProps = {
  profile: ProfileSummary;
  offeredListings: SkillListing[];
};

export function ProfileDynamicView({ profile, offeredListings }: ProfileDynamicViewProps) {
  const industryThemeOptions = useMemo(() => {
    const categories = new Set(offeredListings.map((listing) => listing.category));

    if (categories.size === 0) {
      return [];
    }

    return Array.from(categories).map(toThemeOption);
  }, [offeredListings]);

  const defaultThemeKey = industryThemeOptions[0]?.themeKey ?? profile.themeKey;
  const [activeThemeKey, setActiveThemeKey] = useState<ThemeKey>(defaultThemeKey);

  const activeTheme = fieldThemes[activeThemeKey];
  const activeThemeOption = industryThemeOptions.find((option) => option.themeKey === activeThemeKey);

  return (
    <div
      className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]"
      style={{
        background: `radial-gradient(circle at 12% 8%, ${activeTheme.accent}18, transparent 42%)`,
      }}
    >
      <aside className="grid gap-6">
        <section
          className="surface rounded-[32px] border p-8"
          style={{ borderColor: `${activeTheme.primary}40`, background: `${activeTheme.accent}18` }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: activeTheme.primary }}>
            Profile
          </p>
          <h1 className="section-heading mt-3 text-3xl font-semibold text-ink">{profile.name}</h1>
          <p className="mt-2 text-base text-slate-600">
            {profile.fieldOfStudy} · {profile.school.name}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <VerificationBadge status={profile.verificationStatus} />
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700">
              {profile.tier}
            </span>
          </div>
          <p className="mt-5 text-sm leading-7 text-slate-700">{profile.bio}</p>

          <div className="mt-6 rounded-[24px] border border-white/70 bg-white/70 px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">Active profile theme</p>
            <p className="mt-2 text-sm font-semibold" style={{ color: activeTheme.primary }}>
              {activeThemeOption ? `${activeThemeOption.label} industry` : fieldThemes[profile.themeKey].label}
            </p>
            <p className="mt-1 text-xs text-slate-600">
              Your full profile colors adapt to the industry skill lane selected below.
            </p>
          </div>
        </section>

        <section className="surface rounded-[32px] p-8">
          <h2 className="section-heading text-2xl font-semibold text-ink">Industry theme controls</h2>
          <p className="mt-2 text-sm text-slate-600">
            Switch by industry to preview how your profile adapts when trading in different sectors.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {industryThemeOptions.map((option) => {
              const optionTheme = fieldThemes[option.themeKey];
              const isActive = option.themeKey === activeThemeKey;

              return (
                <button
                  key={option.category}
                  type="button"
                  onClick={() => setActiveThemeKey(option.themeKey)}
                  className="rounded-full border px-3 py-2 text-sm font-semibold transition"
                  style={{
                    color: optionTheme.primary,
                    borderColor: isActive ? `${optionTheme.primary}66` : "#cbd5e1",
                    backgroundColor: isActive ? `${optionTheme.accent}1f` : "#ffffff",
                  }}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </section>

        <section className="surface rounded-[32px] p-8">
          <h2 className="section-heading text-2xl font-semibold text-ink">Trust signals</h2>
          <div className="mt-5 grid gap-3">
            <div className="rounded-[24px] px-4 py-4 text-sm text-slate-700" style={{ background: `${activeTheme.accent}14` }}>
              {profile.completedTrades} completed trades
            </div>
            <div className="rounded-[24px] px-4 py-4 text-sm text-slate-700" style={{ background: `${activeTheme.accent}14` }}>
              {profile.rating.toFixed(1)} rating average
            </div>
            <div className="rounded-[24px] px-4 py-4 text-sm text-slate-700" style={{ background: `${activeTheme.accent}14` }}>
              {profile.responseRate} response rate
            </div>
            <div className="rounded-[24px] px-4 py-4 text-sm text-slate-700" style={{ background: `${activeTheme.accent}14` }}>
              {profile.disputeRate} dispute rate
            </div>
          </div>
        </section>
      </aside>

      <div className="grid gap-6">
        <section className="surface rounded-[32px] p-8" style={{ borderTop: `4px solid ${activeTheme.primary}` }}>
          <h2 className="section-heading text-2xl font-semibold text-ink">Offerings</h2>
          <div className="mt-5 grid gap-4">
            {offeredListings.map((listing) => (
              <article
                key={listing.id}
                className="rounded-[26px] border px-5 py-5"
                style={{ borderColor: `${activeTheme.primary}33`, background: `${activeTheme.accent}0d` }}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="section-heading text-xl font-semibold text-ink">{listing.title}</h3>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                    {listing.creditRange}
                  </span>
                </div>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: activeTheme.primary }}>
                  {categoryLabelMap.get(listing.category)}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{listing.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="surface rounded-[32px] p-8" style={{ borderTop: `4px solid ${activeTheme.primary}` }}>
          <h2 className="section-heading text-2xl font-semibold text-ink">Seeking</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {profile.skillsWanted.map((skill) => (
              <span
                key={skill}
                className="rounded-full border px-3 py-2 text-sm font-semibold"
                style={{ borderColor: `${activeTheme.primary}30`, background: `${activeTheme.accent}14`, color: activeTheme.primary }}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="surface rounded-[32px] p-8" style={{ borderTop: `4px solid ${activeTheme.primary}` }}>
          <h2 className="section-heading text-2xl font-semibold text-ink">Portfolio</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {profile.portfolio.map((item) => (
              <article
                key={item.title}
                className="rounded-[26px] border px-5 py-5"
                style={{ borderColor: `${activeTheme.primary}33`, background: `${activeTheme.accent}0d` }}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: activeTheme.primary }}>
                  {item.category}
                </p>
                <h3 className="section-heading mt-2 text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="surface rounded-[32px] p-8" style={{ borderTop: `4px solid ${activeTheme.primary}` }}>
          <h2 className="section-heading text-2xl font-semibold text-ink">Testimonials</h2>
          <div className="mt-5 grid gap-4">
            {profile.testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.quote}
                className="rounded-[26px] border px-5 py-5"
                style={{ borderColor: `${activeTheme.primary}30`, background: `${activeTheme.accent}14` }}
              >
                <p className="text-sm leading-7 text-slate-700">{`"${testimonial.quote}"`}</p>
                <footer className="mt-3 text-sm" style={{ color: activeTheme.primary }}>
                  {testimonial.author} · {testimonial.category}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}