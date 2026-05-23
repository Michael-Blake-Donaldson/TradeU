import {
  BadgeCheck,
  BriefcaseBusiness,
  Camera,
  Dumbbell,
  GraduationCap,
  Music4,
  Palette,
  type LucideIcon,
} from "lucide-react";

export type CategoryKey =
  | "tutoring"
  | "career-help"
  | "fitness"
  | "design"
  | "music"
  | "photography";

export type ThemeKey =
  | "computer-science"
  | "health"
  | "design"
  | "music"
  | "media"
  | "education"
  | "business";

export const siteNavigation = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/safety", label: "Safety" },
  { href: "/login", label: "Log in" },
];

export const launchCategories: Array<{
  key: CategoryKey;
  name: string;
  description: string;
  accent: string;
  icon: LucideIcon;
  safetyNote?: string;
}> = [
  {
    key: "tutoring",
    name: "Tutoring",
    description: "Math, programming, writing, languages, and study coaching.",
    accent: "#EAB308",
    icon: GraduationCap,
  },
  {
    key: "career-help",
    name: "Career Help",
    description: "Resume reviews, mock interviews, portfolios, and internship prep.",
    accent: "#0EA5E9",
    icon: BriefcaseBusiness,
  },
  {
    key: "fitness",
    name: "Fitness",
    description: "Workout planning, accountability, and beginner-friendly guidance.",
    accent: "#10B981",
    icon: Dumbbell,
    safetyNote: "Student guidance only. Not medical advice.",
  },
  {
    key: "design",
    name: "Design",
    description: "Logo design, social graphics, UI feedback, and brand kits.",
    accent: "#A855F7",
    icon: Palette,
  },
  {
    key: "music",
    name: "Music",
    description: "Singing, theory, guitar lessons, and production support.",
    accent: "#EC4899",
    icon: Music4,
  },
  {
    key: "photography",
    name: "Photography",
    description: "Portraits, editing, camera basics, and content creation.",
    accent: "#F97316",
    icon: Camera,
  },
];

export const valueMoments = [
  "Build portfolio proof from real student work.",
  "Earn trade credits through completed exchanges.",
  "Collect testimonials and level up your reputation.",
  "Find trusted, affordable help from verified students.",
];

export const howItWorksSteps = [
  "Create your profile and verify your student identity.",
  "Offer skills you can provide and choose skills you want.",
  "Request trades with clear scope, timing, and success criteria.",
  "Complete the work, release credits, and earn reviews.",
];

export const trustHighlights = [
  "Verified student badges and school-aware profiles.",
  "Trade-based messaging that keeps evidence on-platform.",
  "Dispute-ready trade records with clear success criteria.",
  "Ratings, testimonials, and progress tiers that reward quality.",
];

export const fieldThemes: Record<
  ThemeKey,
  {
    label: string;
    primary: string;
    accent: string;
  }
> = {
  "computer-science": {
    label: "Computer Science / IT",
    primary: "#3B82F6",
    accent: "#60A5FA",
  },
  health: {
    label: "Nutrition / Fitness / Health",
    primary: "#10B981",
    accent: "#34D399",
  },
  design: {
    label: "Design / Art",
    primary: "#A855F7",
    accent: "#C084FC",
  },
  music: {
    label: "Music",
    primary: "#EC4899",
    accent: "#F472B6",
  },
  media: {
    label: "Photography / Media",
    primary: "#F97316",
    accent: "#FB923C",
  },
  education: {
    label: "Education / Tutoring",
    primary: "#EAB308",
    accent: "#FACC15",
  },
  business: {
    label: "Business / Marketing",
    primary: "#0EA5E9",
    accent: "#38BDF8",
  },
};

export const socialProof = [
  {
    quote:
      "I traded a calculus tutoring session for a portfolio review and ended up with two strong case studies for internships.",
    name: "Kai M.",
    role: "Computer Science student",
  },
  {
    quote:
      "TradeU made it feel normal to ask for help because I could offer something valuable back right away.",
    name: "Ariana P.",
    role: "Marketing student",
  },
  {
    quote:
      "The profile badges and reviews mattered. I knew who I could trust before I booked a photo edit session.",
    name: "Jordan T.",
    role: "Photography student",
  },
];

export const statusLabels = [
  "requested",
  "accepted",
  "in progress",
  "pending completion",
  "disputed",
  "completed",
];

export const trustSignals = [
  "Verified student",
  "Low dispute rate",
  "Portfolio uploaded",
  "Fast response",
  "High completion rate",
  "Strong reviews",
];

export const membershipBenefits = [
  {
    title: "Experience-first profiles",
    body: "Your completed trades, testimonials, and portfolio work compound into real proof before graduation.",
  },
  {
    title: "Flexible exchange model",
    body: "Support direct trades, trade credits, or hybrid exchanges without turning the platform into generic freelancing.",
  },
  {
    title: "Trust built into every step",
    body: "Profiles, messaging, reviews, and moderation all reinforce safer student-to-student collaboration.",
  },
];

export const waitlistStats = [
  { label: "Launch categories", value: "6" },
  { label: "MVP priority screens", value: "8" },
  { label: "Core trade types", value: "3" },
  { label: "Trust checkpoints", value: "4" },
];

export const badgeCallouts = [
  {
    icon: BadgeCheck,
    title: "Verified students first",
    body: "Badges, school context, and structured reviews make the marketplace legible from the first click.",
  },
];