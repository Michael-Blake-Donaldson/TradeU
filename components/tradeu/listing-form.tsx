"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { launchCategories } from "@/lib/constants/tradeu";
import { recommendedCreditRange } from "@/lib/security/trade-guards";
import {
  listingSchema,
  type ListingInput,
  type ListingValues,
} from "@/lib/validation/tradeu";

const inputClassName =
  "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:border-sky-300 focus:outline-none";

export function ListingForm() {
  const defaults = recommendedCreditRange(90, "Intermediate");
  const form = useForm<ListingInput, undefined, ListingValues>({
    resolver: zodResolver(listingSchema),
    defaultValues: {
      category: "career-help",
      title: "",
      description: "",
      tradePreference: "hybrid trade",
      expectedTime: "60-90 minutes",
      tierRequired: "Intermediate",
      creditMin: defaults.min,
      creditMax: defaults.max,
    },
  });

  const onSubmit = form.handleSubmit((values) => {
    toast.success(`Listing draft saved: ${values.title}`);
  });

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Category
          <select className={inputClassName} {...form.register("category")}>
            {launchCategories.map((category) => (
              <option key={category.key} value={category.key}>
                {category.name}
              </option>
            ))}
          </select>
          <FieldError message={form.formState.errors.category?.message} />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Tier required
          <select className={inputClassName} {...form.register("tierRequired")}>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Expert</option>
            <option>Mentor</option>
          </select>
          <FieldError message={form.formState.errors.tierRequired?.message} />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-medium text-slate-700">
        Listing title
        <input className={inputClassName} {...form.register("title")} placeholder="Resume review with annotated PDF" />
        <FieldError message={form.formState.errors.title?.message} />
      </label>

      <label className="grid gap-2 text-sm font-medium text-slate-700">
        Description
        <textarea
          className={`${inputClassName} min-h-36 resize-y`}
          {...form.register("description")}
          placeholder="Describe what the student receives, how long it takes, and what a successful result looks like."
        />
        <FieldError message={form.formState.errors.description?.message} />
      </label>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Trade preference
          <select className={inputClassName} {...form.register("tradePreference")}>
            <option>direct trade</option>
            <option>credit trade</option>
            <option>hybrid trade</option>
          </select>
          <FieldError message={form.formState.errors.tradePreference?.message} />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Expected time
          <input className={inputClassName} {...form.register("expectedTime")} placeholder="60-90 minutes" />
          <FieldError message={form.formState.errors.expectedTime?.message} />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Minimum credits
          <input className={inputClassName} type="number" {...form.register("creditMin", { valueAsNumber: true })} />
          <FieldError message={form.formState.errors.creditMin?.message} />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Maximum credits
          <input className={inputClassName} type="number" {...form.register("creditMax", { valueAsNumber: true })} />
          <FieldError message={form.formState.errors.creditMax?.message} />
        </label>
      </div>

      <div className="flex justify-end">
        <button className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-strong">
          Save listing draft
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