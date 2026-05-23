import { fieldThemes, launchCategories } from "@/lib/constants/tradeu";
import { OnboardingForm } from "@/components/tradeu/onboarding-form";
import { schools } from "@/lib/mock/tradeu";

const onboardingSteps = [
  {
    title: "Create account",
    fields: ["Name", "Email", "Password", "Accept terms"],
    note: "Keep validation simple and obvious.",
  },
  {
    title: "School and verification",
    fields: ["Select school", "Optional school email", "Verification status"],
    note: "Unverified students can still explore, but trust and trade limits should differ.",
  },
  {
    title: "Field of study",
    fields: ["Major or field", "Theme preview"],
    note: "Field themes personalize the product without fragmenting the UI.",
  },
  {
    title: "Skills offered and wanted",
    fields: ["Category", "Skill title", "Level", "What you want help with"],
    note: "Require at least one offered skill so the marketplace contributes supply.",
  },
  {
    title: "Profile preview",
    fields: ["Verification badge", "Theme accent", "First portfolio item"],
    note: "End with a strong “this is me” moment before redirecting to the dashboard.",
  },
];

export default function OnboardingPage() {
  return (
    <div className="grid gap-6 xl:grid-cols-[0.88fr_1.12fr]">
      <section className="surface rounded-[32px] p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          Onboarding
        </p>
        <h1 className="section-heading mt-3 text-3xl font-semibold text-ink">
          Guided setup should create enough profile depth to power recommendations immediately.
        </h1>
        <div className="mt-8 grid gap-4">
          {onboardingSteps.map((step, index) => (
            <article key={step.title} className="rounded-[28px] bg-slate-50 px-5 py-5">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <div>
                  <h2 className="section-heading text-xl font-semibold text-ink">{step.title}</h2>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{step.note}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {step.fields.map((field) => (
                  <span key={field} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                    {field}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-[28px] border border-slate-200 p-5">
          <OnboardingForm />
        </div>
      </section>

      <section className="grid gap-6">
        <article className="surface rounded-[32px] p-8">
          <h2 className="section-heading text-2xl font-semibold text-ink">School directory preview</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {schools.map((school) => (
              <div key={school.id} className="rounded-[24px] border border-slate-200 px-4 py-4">
                <p className="font-semibold text-ink">{school.name}</p>
                <p className="mt-1 text-sm text-slate-600">{school.location}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  {school.domain}
                </p>
              </div>
            ))}
          </div>
        </article>

        <article className="surface rounded-[32px] p-8">
          <h2 className="section-heading text-2xl font-semibold text-ink">Field theme preview</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {Object.entries(fieldThemes).map(([key, theme]) => (
              <div
                key={key}
                className="rounded-[24px] border px-4 py-4"
                style={{ borderColor: `${theme.primary}40`, background: `${theme.accent}12` }}
              >
                <p className="font-semibold text-ink">{theme.label}</p>
                <div className="mt-3 flex gap-2">
                  <span className="h-6 w-6 rounded-full" style={{ backgroundColor: theme.primary }} />
                  <span className="h-6 w-6 rounded-full" style={{ backgroundColor: theme.accent }} />
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="surface rounded-[32px] p-8">
          <h2 className="section-heading text-2xl font-semibold text-ink">Launch categories to choose from</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {launchCategories.map((category) => (
              <span key={category.key} className="rounded-full bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700">
                {category.name}
              </span>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}