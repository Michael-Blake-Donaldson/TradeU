import { notFound } from "next/navigation";

import { fieldThemes } from "@/lib/constants/tradeu";
import { currentProfile, listings } from "@/lib/mock/tradeu";
import { VerificationBadge } from "@/components/tradeu/status-badge";

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (id !== currentProfile.id) {
    notFound();
  }

  const theme = fieldThemes[currentProfile.themeKey];
  const offeredListings = listings.filter((listing) => listing.providerId === currentProfile.id);

  return (
    <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
      <aside className="grid gap-6">
        <section
          className="surface rounded-[32px] border p-8"
          style={{ borderColor: `${theme.primary}40`, background: `${theme.accent}18` }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Profile</p>
          <h1 className="section-heading mt-3 text-3xl font-semibold text-ink">{currentProfile.name}</h1>
          <p className="mt-2 text-base text-slate-600">
            {currentProfile.fieldOfStudy} · {currentProfile.school.name}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <VerificationBadge status={currentProfile.verificationStatus} />
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700">
              {currentProfile.tier}
            </span>
          </div>
          <p className="mt-5 text-sm leading-7 text-slate-700">{currentProfile.bio}</p>
        </section>

        <section className="surface rounded-[32px] p-8">
          <h2 className="section-heading text-2xl font-semibold text-ink">Trust signals</h2>
          <div className="mt-5 grid gap-3">
            <div className="rounded-[24px] bg-slate-50 px-4 py-4 text-sm text-slate-700">
              {currentProfile.completedTrades} completed trades
            </div>
            <div className="rounded-[24px] bg-slate-50 px-4 py-4 text-sm text-slate-700">
              {currentProfile.rating.toFixed(1)} rating average
            </div>
            <div className="rounded-[24px] bg-slate-50 px-4 py-4 text-sm text-slate-700">
              {currentProfile.responseRate} response rate
            </div>
            <div className="rounded-[24px] bg-slate-50 px-4 py-4 text-sm text-slate-700">
              {currentProfile.disputeRate} dispute rate
            </div>
          </div>
        </section>
      </aside>

      <div className="grid gap-6">
        <section className="surface rounded-[32px] p-8">
          <h2 className="section-heading text-2xl font-semibold text-ink">Offerings</h2>
          <div className="mt-5 grid gap-4">
            {offeredListings.map((listing) => (
              <article key={listing.id} className="rounded-[26px] border border-slate-200 px-5 py-5">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="section-heading text-xl font-semibold text-ink">{listing.title}</h3>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                    {listing.creditRange}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{listing.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="surface rounded-[32px] p-8">
          <h2 className="section-heading text-2xl font-semibold text-ink">Seeking</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {currentProfile.skillsWanted.map((skill) => (
              <span key={skill} className="rounded-full bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="surface rounded-[32px] p-8">
          <h2 className="section-heading text-2xl font-semibold text-ink">Portfolio</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {currentProfile.portfolio.map((item) => (
              <article key={item.title} className="rounded-[26px] border border-slate-200 px-5 py-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{item.category}</p>
                <h3 className="section-heading mt-2 text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="surface rounded-[32px] p-8">
          <h2 className="section-heading text-2xl font-semibold text-ink">Testimonials</h2>
          <div className="mt-5 grid gap-4">
            {currentProfile.testimonials.map((testimonial) => (
              <blockquote key={testimonial.quote} className="rounded-[26px] bg-slate-50 px-5 py-5">
                <p className="text-sm leading-7 text-slate-700">“{testimonial.quote}”</p>
                <footer className="mt-3 text-sm text-muted">
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