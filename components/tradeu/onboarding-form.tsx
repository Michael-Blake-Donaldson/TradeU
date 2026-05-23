"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { schools } from "@/lib/mock/tradeu";
import { onboardingSchema, type OnboardingInput } from "@/lib/validation/tradeu";

const inputClassName =
  "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:border-sky-300 focus:outline-none";

export function OnboardingForm() {
  const form = useForm<OnboardingInput>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      displayName: "",
      schoolId: "",
      schoolEmail: "",
      fieldOfStudy: "",
      offeredSkill: "",
      wantedSkill: "",
      bio: "",
    },
  });

  const onSubmit = form.handleSubmit((values) => {
    toast.success(`Saved onboarding draft for ${values.displayName}.`);
  });

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Display name
          <input className={inputClassName} {...form.register("displayName")} placeholder="Ava Brooks" />
          <FieldError message={form.formState.errors.displayName?.message} />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          School
          <select className={inputClassName} {...form.register("schoolId")}>
            <option value="">Select a school</option>
            {schools.map((school) => (
              <option key={school.id} value={school.id}>
                {school.name}
              </option>
            ))}
          </select>
          <FieldError message={form.formState.errors.schoolId?.message} />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          School email
          <input className={inputClassName} {...form.register("schoolEmail")} placeholder="name@school.edu" />
          <FieldError message={form.formState.errors.schoolEmail?.message} />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Field of study
          <input className={inputClassName} {...form.register("fieldOfStudy")} placeholder="Computer Science" />
          <FieldError message={form.formState.errors.fieldOfStudy?.message} />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          First offered skill
          <input className={inputClassName} {...form.register("offeredSkill")} placeholder="Resume reviews" />
          <FieldError message={form.formState.errors.offeredSkill?.message} />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          First wanted skill
          <input className={inputClassName} {...form.register("wantedSkill")} placeholder="Portrait photography" />
          <FieldError message={form.formState.errors.wantedSkill?.message} />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-medium text-slate-700">
        Short bio
        <textarea
          className={`${inputClassName} min-h-32 resize-y`}
          {...form.register("bio")}
          placeholder="Explain what you study, what you can help with, and the kind of trades you want to make."
        />
        <FieldError message={form.formState.errors.bio?.message} />
      </label>

      <div className="flex justify-end">
        <button className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-strong">
          Save onboarding draft
        </button>
      </div>
    </form>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) {
    return null;
  }

  return <span className="text-xs font-semibold text-rose-600">{message}</span>;
}