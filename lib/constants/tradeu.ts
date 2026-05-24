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

export const degreeIdentity = [
  { key: "tech", label: "Tech", color: "#2563EB" },
  { key: "design", label: "Design", color: "#7C3AED" },
  { key: "health", label: "Health", color: "#0D9488" },
  { key: "business", label: "Business", color: "#D97706" },
  { key: "creative", label: "Creative", color: "#DC2626" },
  { key: "engineering", label: "Engineering", color: "#EA580C" },
];

export const discoverSignals = [
  {
    title: "Skill-to-skill trades",
    detail: "Swap a capability directly when both students need each other this week.",
    metric: "42% of weekly matches",
  },
  {
    title: "Hybrid exchanges",
    detail: "Combine credits and direct collaboration when scope is uneven.",
    metric: "31% of weekly matches",
  },
  {
    title: "Credit-first requests",
    detail: "Use credits when you need speed and clear delivery windows.",
    metric: "27% of weekly matches",
  },
];

export const studentSpotlights = [
  {
    name: "Nia F.",
    degree: "Computer Science",
    headline: "Traded UI tutoring for mobile bug triage and landed an app internship.",
    trust: "Verified + 18 successful exchanges",
  },
  {
    name: "Adrian K.",
    degree: "Design",
    headline: "Built a campus brand kit by trading logo work for analytics mentoring.",
    trust: "5.0 rating across 12 collaborations",
  },
  {
    name: "Mara S.",
    degree: "Health Sciences",
    headline: "Exchanged study coaching for portfolio photography before grad applications.",
    trust: "Low dispute rate + fast response",
  },
];

export const collaborationActivity = [
  {
    lane: "Design -> Business",
    action: "Pitch deck refresh traded for campaign analytics setup",
    time: "3m ago",
  },
  {
    lane: "Engineering -> Creative",
    action: "Landing page build exchanged for short-form content editing",
    time: "11m ago",
  },
  {
    lane: "Tech -> Health",
    action: "Data dashboard support traded for wellness coaching plan",
    time: "19m ago",
  },
  {
    lane: "Business -> Design",
    action: "Sales script polish exchanged for social visuals",
    time: "27m ago",
  },
];

export const communityStatsExpanded = [
  {
    label: "Active schools",
    value: "21",
    context: "Students currently collaborating from verified campus communities",
  },
  {
    label: "Weekly collaboration flows",
    value: "1,480+",
    context: "Documented request-to-completion exchanges this month",
  },
  {
    label: "Resolved with no dispute",
    value: "96.4%",
    context: "Trust mechanisms holding quality and fairness across lanes",
  },
  {
    label: "Portfolio-ready outcomes",
    value: "3,200+",
    context: "Deliverables students can showcase in internship and job cycles",
  },
];