import { ListingCard } from "@/components/tradeu/listing-card";
import { launchCategories } from "@/lib/constants/tradeu";
import { listings } from "@/lib/mock/tradeu";

const filters = [
  "All schools",
  "Verified students only",
  "Portfolio uploaded",
  "Direct trade",
  "Credit trade",
  "Hybrid trade",
  "Fastest response",
];

export default function BrowsePage() {
  return (
    <div className="grid gap-6">
      <section className="surface rounded-[32px] p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Browse</p>
        <h1 className="section-heading mt-3 text-3xl font-semibold text-ink">
          Search when you know what you need. Browse when you want to see what the marketplace can unlock.
        </h1>
        <div className="mt-6 rounded-[24px] border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-600">
          Search examples: “calculus tutor”, “resume review”, “guitar lessons”, “logo design”
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-primary hover:text-primary"
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-6">
        {launchCategories.map((category) => (
          <div key={category.key} className="surface rounded-[26px] px-4 py-5">
            <p className="section-heading text-lg font-semibold text-ink">{category.name}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{category.description}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-5 xl:grid-cols-2">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </section>
    </div>
  );
}