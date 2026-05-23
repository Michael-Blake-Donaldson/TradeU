import { howItWorksSteps, membershipBenefits } from "@/lib/constants/tradeu";

export default function HowItWorksPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-16 sm:px-6 lg:px-8">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
          How it works
        </p>
        <h1 className="section-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          TradeU keeps the student trade loop clear from the first profile to the final review.
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-600">
          The MVP is designed around one core loop: sign up, verify your school, offer a skill,
          request a trade, complete the work, and earn reputation through reviews.
        </p>
      </section>

      <section className="grid gap-5">
        {howItWorksSteps.map((step, index) => (
          <article key={step} className="surface rounded-[30px] p-6">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-lg font-semibold text-white">
                {index + 1}
              </div>
              <div>
                <h2 className="section-heading text-2xl font-semibold text-ink">Step {index + 1}</h2>
                <p className="mt-2 text-base leading-7 text-slate-600">{step}</p>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {membershipBenefits.map((benefit) => (
          <article key={benefit.title} className="surface rounded-[30px] p-6">
            <h2 className="section-heading text-xl font-semibold text-ink">{benefit.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{benefit.body}</p>
          </article>
        ))}
      </section>
    </div>
  );
}