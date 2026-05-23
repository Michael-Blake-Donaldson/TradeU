import { z } from "zod";

import { launchCategories } from "@/lib/constants/tradeu";

const categoryValues = launchCategories.map((category) => category.key);

export const onboardingSchema = z.object({
  displayName: z.string().min(2, "Enter your name."),
  schoolId: z.string().min(1, "Select a school."),
  schoolEmail: z.email("Use a valid school email.").or(z.literal("")),
  fieldOfStudy: z.string().min(2, "Choose your field of study."),
  offeredSkill: z.string().min(2, "Add one offered skill."),
  wantedSkill: z.string().min(2, "Add one skill you want."),
  bio: z.string().min(20, "Write a short intro so students know what you do.").max(280),
});

export const listingSchema = z
  .object({
    category: z.enum(categoryValues as [string, ...string[]], "Choose a category."),
    title: z.string().min(6, "Write a clear listing title."),
    description: z.string().min(40, "Describe what the student will receive.").max(600),
    tradePreference: z.enum(["direct trade", "credit trade", "hybrid trade"]),
    expectedTime: z.string().min(3, "Estimate the expected time."),
    tierRequired: z.enum(["Beginner", "Intermediate", "Expert", "Mentor"]),
    creditMin: z.coerce.number().min(0),
    creditMax: z.coerce.number().min(0),
  })
  .refine((data) => data.creditMax >= data.creditMin, {
    message: "Maximum credits must be greater than or equal to the minimum.",
    path: ["creditMax"],
  });

export const tradeRequestSchema = z
  .object({
    tradeType: z.enum(["direct trade", "credit trade", "hybrid trade"]),
    offeredCredits: z.coerce.number().min(0),
    deadline: z.string().min(3, "Add a realistic deadline."),
    format: z.string().min(2, "Describe the format or delivery method."),
    needSummary: z.string().min(20, "Explain what you need help with."),
    successCriteria: z.string().min(20, "Clear success criteria reduce disputes."),
  })
  .superRefine((data, ctx) => {
    if (data.tradeType !== "direct trade" && data.offeredCredits === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Credit and hybrid trades should specify a credit amount.",
        path: ["offeredCredits"],
      });
    }

    if (data.offeredCredits >= 200 && data.successCriteria.length < 40) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Higher-value trades need more detailed success criteria.",
        path: ["successCriteria"],
      });
    }
  });

export const reportSchema = z.object({
  reason: z.string().min(6, "Explain the issue clearly."),
  details: z.string().min(20, "Add enough detail for moderation review."),
});

export type OnboardingInput = z.infer<typeof onboardingSchema>;
export type ListingInput = z.input<typeof listingSchema>;
export type ListingValues = z.output<typeof listingSchema>;
export type TradeRequestInput = z.input<typeof tradeRequestSchema>;
export type TradeRequestValues = z.output<typeof tradeRequestSchema>;
export type ReportInput = z.infer<typeof reportSchema>;