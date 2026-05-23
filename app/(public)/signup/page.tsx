import { SignupForm } from "@/components/tradeu/signup-form";

export default function SignupPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="surface rounded-[32px] p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Join TradeU</p>
        <h1 className="section-heading mt-4 text-3xl font-semibold tracking-tight text-ink">
          Build a profile that shows what you study, what you offer, and what you want to learn.
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Create your account to start onboarding, verify your school context, and activate your first
          trade-ready profile.
        </p>

        <SignupForm />
      </section>
    </div>
  );
}