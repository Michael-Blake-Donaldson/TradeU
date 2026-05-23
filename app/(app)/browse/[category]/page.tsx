import { notFound } from "next/navigation";

import { ListingCard } from "@/components/tradeu/listing-card";
import { launchCategories } from "@/lib/constants/tradeu";
import { listings, categoryIntro } from "@/lib/mock/tradeu";

export function generateStaticParams() {
  return launchCategories.map((category) => ({ category: category.key }));
}

export default async function BrowseCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const intro = categoryIntro[category as keyof typeof categoryIntro];

  if (!intro) {
    notFound();
  }

  const filtered = listings.filter((listing) => listing.category === category);

  return (
    <div className="grid gap-6">
      <section className="surface rounded-[32px] p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Category</p>
        <h1 className="section-heading mt-3 text-3xl font-semibold text-ink">{intro.title}</h1>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">{intro.description}</p>
      </section>

      <section className="grid gap-5 xl:grid-cols-2">
        {filtered.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </section>
    </div>
  );
}