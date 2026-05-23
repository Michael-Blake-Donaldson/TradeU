import { launchCategories } from "@/lib/constants/tradeu";
import type { TradeStatus, VerificationStatus } from "@/lib/types/tradeu";

const transitionMap: Record<TradeStatus, TradeStatus[]> = {
  requested: ["accepted", "in_progress"],
  accepted: ["in_progress", "disputed"],
  in_progress: ["pending_completion", "disputed"],
  pending_completion: ["completed", "disputed"],
  completed: [],
  disputed: ["completed"],
};

export function canTransitionTrade(from: TradeStatus, to: TradeStatus) {
  return transitionMap[from].includes(to);
}

export function requiresVerifiedStudent(verificationStatus: VerificationStatus, creditValue: number) {
  return verificationStatus === "verified_student" || creditValue < 200;
}

export function isSensitiveCategory(category: string) {
  return launchCategories.some(
    (launchCategory) => launchCategory.key === category && Boolean(launchCategory.safetyNote),
  );
}

export function recommendedCreditRange(minutes: number, tier: "Beginner" | "Intermediate" | "Expert" | "Mentor") {
  const tierMultiplier = {
    Beginner: 1,
    Intermediate: 1.4,
    Expert: 2.2,
    Mentor: 3,
  }[tier];

  const min = Math.round((minutes / 30) * 20 * tierMultiplier);
  const max = Math.round(min * 1.6);

  return { min, max };
}