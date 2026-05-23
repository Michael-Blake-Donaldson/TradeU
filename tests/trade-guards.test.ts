import { describe, expect, it } from "vitest";

import {
  canTransitionTrade,
  isSensitiveCategory,
  recommendedCreditRange,
  requiresVerifiedStudent,
} from "@/lib/security/trade-guards";

describe("trade guards", () => {
  it("allows only valid trade status transitions", () => {
    expect(canTransitionTrade("in_progress", "pending_completion")).toBe(true);
    expect(canTransitionTrade("completed", "disputed")).toBe(false);
  });

  it("flags sensitive categories", () => {
    expect(isSensitiveCategory("fitness")).toBe(true);
    expect(isSensitiveCategory("design")).toBe(false);
  });

  it("requires verified students for higher-value trades", () => {
    expect(requiresVerifiedStudent("unverified", 250)).toBe(false);
    expect(requiresVerifiedStudent("verified_student", 250)).toBe(true);
  });

  it("calculates predictable recommended credit ranges", () => {
    expect(recommendedCreditRange(60, "Beginner")).toEqual({ min: 40, max: 64 });
    expect(recommendedCreditRange(90, "Intermediate")).toEqual({ min: 84, max: 134 });
  });
});