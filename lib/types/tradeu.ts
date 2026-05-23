import type { CategoryKey, ThemeKey } from "@/lib/constants/tradeu";

export type VerificationStatus =
  | "unverified"
  | "pending"
  | "verified_student"
  | "rejected";

export type TierKey = "Beginner" | "Intermediate" | "Expert" | "Mentor";

export type TradePreference = "direct trade" | "credit trade" | "hybrid trade";

export type ListingStatus = "draft" | "active" | "paused" | "removed";

export type TradeRequestStatus =
  | "pending"
  | "accepted"
  | "declined"
  | "countered"
  | "cancelled"
  | "expired";

export type TradeStatus =
  | "requested"
  | "accepted"
  | "in_progress"
  | "pending_completion"
  | "completed"
  | "disputed";

export type ReportStatus = "open" | "under_review" | "resolved" | "dismissed";

export interface School {
  id: string;
  name: string;
  domain: string;
  location: string;
}

export interface SkillListing {
  id: string;
  providerId: string;
  providerName: string;
  providerSchool: string;
  providerTheme: ThemeKey;
  title: string;
  category: CategoryKey;
  level: TierKey;
  description: string;
  creditRange: string;
  expectedTime: string;
  tradePreference: TradePreference;
  rating: number;
  reviewCount: number;
  verificationStatus: VerificationStatus;
  status: ListingStatus;
  responseTime: string;
}

export interface ProfileSummary {
  id: string;
  name: string;
  school: School;
  fieldOfStudy: string;
  themeKey: ThemeKey;
  bio: string;
  verificationStatus: VerificationStatus;
  tier: TierKey;
  rating: number;
  completedTrades: number;
  responseRate: string;
  disputeRate: string;
  credits: number;
  xpProgress: number;
  skillsOffered: string[];
  skillsWanted: string[];
  testimonials: Array<{
    quote: string;
    author: string;
    category: string;
  }>;
  portfolio: Array<{
    title: string;
    description: string;
    category: string;
  }>;
}

export interface ActiveTrade {
  id: string;
  listingTitle: string;
  counterpart: string;
  tradeType: TradePreference;
  creditsHeld: number;
  status: TradeStatus;
  dueDate: string;
  successCriteria: string;
  lastUpdate: string;
}

export interface MessageThread {
  id: string;
  counterpart: string;
  tradeTitle: string;
  status: TradeStatus;
  preview: string;
  unreadCount: number;
  updatedAt: string;
  messages: Array<{
    id: string;
    sender: string;
    sentAt: string;
    body: string;
  }>;
}

export interface ModerationReport {
  id: string;
  reporter: string;
  target: string;
  reason: string;
  status: ReportStatus;
  submittedAt: string;
  evidenceSummary: string;
}

export interface DashboardChecklistItem {
  id: string;
  label: string;
  complete: boolean;
}