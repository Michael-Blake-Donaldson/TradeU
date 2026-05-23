import { TradeRequestForm } from "@/components/tradeu/trade-request-form";

export default function TradeRequestPage() {
  return (
    <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
      <section className="surface rounded-[32px] p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Request trade</p>
        <h1 className="section-heading mt-3 text-3xl font-semibold text-ink">
          Good trade requests make scope, deadline, and success criteria explicit before anyone commits.
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Higher-value requests should always include specific deliverables. That reduces disputes and makes the credit hold more defensible.
        </p>
      </section>

      <section className="surface rounded-[32px] p-8">
        <TradeRequestForm />
      </section>
    </div>
  );
}