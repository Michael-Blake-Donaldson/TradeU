"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import {
  tradeRequestSchema,
  type TradeRequestInput,
  type TradeRequestValues,
} from "@/lib/validation/tradeu";

const inputClassName =
  "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:border-sky-300 focus:outline-none";

export function TradeRequestForm() {
  const form = useForm<TradeRequestInput, undefined, TradeRequestValues>({
    resolver: zodResolver(tradeRequestSchema),
    defaultValues: {
      tradeType: "hybrid trade",
      offeredCredits: 60,
      deadline: "May 28",
      format: "Annotated PDF plus summary notes",
      needSummary: "I need my internship resume tightened up for product and engineering roles.",
      successCriteria: "Return an annotated PDF, suggest stronger impact bullets, and list three improvements I should make before applying.",
    },
  });

  const onSubmit = form.handleSubmit((values) => {
    toast.success(`Trade request prepared with ${values.offeredCredits} credits.`);
  });

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Trade type
          <select className={inputClassName} {...form.register("tradeType")}>
            <option>direct trade</option>
            <option>credit trade</option>
            <option>hybrid trade</option>
          </select>
          <FieldError message={form.formState.errors.tradeType?.message} />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Offered credits
          <input className={inputClassName} type="number" {...form.register("offeredCredits", { valueAsNumber: true })} />
          <FieldError message={form.formState.errors.offeredCredits?.message} />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Deadline
          <input className={inputClassName} {...form.register("deadline")} placeholder="May 28" />
          <FieldError message={form.formState.errors.deadline?.message} />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Format
          <input className={inputClassName} {...form.register("format")} placeholder="PDF, live session, async notes" />
          <FieldError message={form.formState.errors.format?.message} />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-medium text-slate-700">
        What do you need?
        <textarea className={`${inputClassName} min-h-28 resize-y`} {...form.register("needSummary")} />
        <FieldError message={form.formState.errors.needSummary?.message} />
      </label>

      <label className="grid gap-2 text-sm font-medium text-slate-700">
        Success criteria
        <textarea className={`${inputClassName} min-h-32 resize-y`} {...form.register("successCriteria")} />
        <FieldError message={form.formState.errors.successCriteria?.message} />
      </label>

      <div className="flex justify-end">
        <button className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-strong">
          Prepare trade request
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