import { LoginForm } from "@/components/tradeu/login-form";

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="surface rounded-[32px] p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Login</p>
        <h1 className="section-heading mt-4 text-3xl font-semibold tracking-tight text-ink">
          Sign in to continue your student trade activity.
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Access your profile, active trades, and reputation progress from your dashboard.
        </p>

        <LoginForm />
      </section>
    </div>
  );
}