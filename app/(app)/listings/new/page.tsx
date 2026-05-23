import { ListingForm } from "@/components/tradeu/listing-form";

export default function NewListingPage() {
  return (
    <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
      <section className="surface rounded-[32px] p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Create listing</p>
        <h1 className="section-heading mt-3 text-3xl font-semibold text-ink">
          Listings should be scannable, scoped, and anchored to sensible value ranges.
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          The MVP should show title, category, level, expected time, credit range, and trade preference clearly.
          Sensitive categories should remain educational and avoid unsafe claims.
        </p>
      </section>

      <section className="surface rounded-[32px] p-8">
        <ListingForm />
      </section>
    </div>
  );
}