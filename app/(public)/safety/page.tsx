import { trustHighlights } from "@/lib/constants/tradeu";

const safetyPrinciples = [
  "Fitness and nutrition guidance stays educational, not medical.",
  "Medical, legal, investing, and other licensed professional advice is not allowed.",
  "Trade conversations should stay on-platform for evidence and support.",
  "Reports and disputes should attach clear context, chat logs, and requested outcomes.",
];

export default function SafetyPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-16 sm:px-6 lg:px-8">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
          Safety
        </p>
        <h1 className="section-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Trust is product infrastructure, not a footnote.
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-600">
          TradeU is designed to help students collaborate safely. Verification, platform messaging,
          reviews, and moderation are part of the product from the MVP stage onward.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {trustHighlights.map((highlight) => (
          <article key={highlight} className="surface rounded-[30px] p-6">
            <p className="text-base leading-7 text-slate-700">{highlight}</p>
          </article>
        ))}
      </section>

      <section className="surface rounded-[32px] p-8">
        <h2 className="section-heading text-2xl font-semibold text-ink">Sensitive category guardrails</h2>
        <div className="mt-5 grid gap-4">
          {safetyPrinciples.map((principle) => (
            <div key={principle} className="rounded-[24px] bg-slate-50 px-5 py-4 text-sm leading-6 text-slate-700">
              {principle}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}