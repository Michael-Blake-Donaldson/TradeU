import { describe, expect, it } from "vitest";

import { listingSchema, tradeRequestSchema } from "@/lib/validation/tradeu";

describe("validation schemas", () => {
  it("accepts a well-formed listing", () => {
    const result = listingSchema.safeParse({
      category: "design",
      title: "UI critique with annotated screenshots",
      description: "I will review your student app screens, identify usability issues, and return annotated screenshots plus a prioritized fix list.",
      tradePreference: "credit trade",
      expectedTime: "60 minutes",
      tierRequired: "Intermediate",
      creditMin: 80,
      creditMax: 140,
    });

    expect(result.success).toBe(true);
  });

  it("requires stronger success criteria for larger trade values", () => {
    const result = tradeRequestSchema.safeParse({
      tradeType: "credit trade",
      offeredCredits: 220,
      deadline: "May 30",
      format: "PDF",
      needSummary: "I need a mock interview and resume help.",
      successCriteria: "Help me improve it.",
    });

    expect(result.success).toBe(false);
  });
});