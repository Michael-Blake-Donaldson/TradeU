import { activeTrades } from "@/lib/mock/tradeu";
import { TradeStatusBadge } from "@/components/tradeu/status-badge";

export default function TradesPage() {
  return (
    <div className="grid gap-6">
      <section className="surface rounded-[32px] p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Trade workflow</p>
        <h1 className="section-heading mt-3 text-3xl font-semibold text-ink">
          Every trade should move through a structured, reviewable lifecycle.
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          Request, accept, counter, hold credits, complete work, confirm delivery, and collect reviews.
          The UI below keeps those states visible and reduces ambiguous commitments.
        </p>
      </section>

      <section className="grid gap-5">
        {activeTrades.map((trade) => (
          <article key={trade.id} className="surface rounded-[32px] p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{trade.tradeType}</p>
                <h2 className="section-heading mt-2 text-2xl font-semibold text-ink">{trade.listingTitle}</h2>
                <p className="mt-2 text-sm text-slate-600">Counterpart: {trade.counterpart}</p>
              </div>
              <TradeStatusBadge status={trade.status} />
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-[24px] bg-slate-50 px-4 py-4">
                <p className="text-sm text-muted">Success criteria</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{trade.successCriteria}</p>
              </div>
              <div className="rounded-[24px] bg-slate-50 px-4 py-4">
                <p className="text-sm text-muted">Credits held</p>
                <p className="mt-2 text-xl font-semibold text-ink">{trade.creditsHeld}</p>
              </div>
              <div className="rounded-[24px] bg-slate-50 px-4 py-4">
                <p className="text-sm text-muted">Due date</p>
                <p className="mt-2 text-xl font-semibold text-ink">{trade.dueDate}</p>
              </div>
            </div>
            <div className="mt-6 rounded-[24px] border border-dashed border-slate-200 px-4 py-4 text-sm leading-6 text-slate-600">
              {trade.lastUpdate}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}