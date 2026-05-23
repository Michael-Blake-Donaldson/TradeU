import { fieldThemes, launchCategories } from "@/lib/constants/tradeu";
import type {
  ActiveTrade,
  DashboardChecklistItem,
  MessageThread,
  ModerationReport,
  ProfileSummary,
  School,
  SkillListing,
} from "@/lib/types/tradeu";

export const schools: School[] = [
  {
    id: "school-1",
    name: "Pacific Technical University",
    domain: "ptu.edu",
    location: "Seattle, WA",
  },
  {
    id: "school-2",
    name: "North Grove State College",
    domain: "ngsc.edu",
    location: "Chicago, IL",
  },
  {
    id: "school-3",
    name: "Metro School of Design",
    domain: "msd.edu",
    location: "Brooklyn, NY",
  },
];

export const currentProfile: ProfileSummary = {
  id: "profile-ava",
  name: "Ava Brooks",
  school: schools[0],
  fieldOfStudy: "Computer Science",
  themeKey: "computer-science",
  bio: "I help students sharpen resumes, portfolios, and entry-level product thinking while trading for creative and wellness support.",
  verificationStatus: "verified_student",
  tier: "Intermediate",
  rating: 4.9,
  completedTrades: 18,
  responseRate: "97%",
  disputeRate: "0.0%",
  credits: 420,
  xpProgress: 76,
  skillsOffered: ["Resume reviews", "Portfolio critique", "Frontend tutoring"],
  skillsWanted: ["Pilates coaching", "Portrait photography", "Brand illustration"],
  testimonials: [
    {
      quote: "Ava turned my internship resume into something I was proud to submit in one session.",
      author: "Miles R.",
      category: "Career Help",
    },
    {
      quote: "The feedback felt structured and actionable, not generic.",
      author: "Nina H.",
      category: "Design",
    },
  ],
  portfolio: [
    {
      title: "Internship resume overhaul",
      description: "Before-and-after resume system with measurable improvement notes.",
      category: "Career Help",
    },
    {
      title: "Student onboarding teardown",
      description: "A lightweight UX audit and recommendation deck for a peer project.",
      category: "Design",
    },
  ],
};

export const listings: SkillListing[] = [
  {
    id: "listing-1",
    providerId: currentProfile.id,
    providerName: currentProfile.name,
    providerSchool: currentProfile.school.name,
    providerTheme: currentProfile.themeKey,
    title: "Resume review with annotated PDF",
    category: "career-help",
    level: "Intermediate",
    description: "I will review your resume, suggest positioning improvements, and return an annotated PDF plus three action points.",
    creditRange: "90-150 credits",
    expectedTime: "60-90 minutes",
    tradePreference: "hybrid trade",
    rating: 4.9,
    reviewCount: 18,
    verificationStatus: "verified_student",
    status: "active",
    responseTime: "within 4 hours",
  },
  {
    id: "listing-2",
    providerId: "profile-zoe",
    providerName: "Zoe Patel",
    providerSchool: schools[2].name,
    providerTheme: "design",
    title: "Logo refresh and social asset starter pack",
    category: "design",
    level: "Expert",
    description: "Logo polish, profile icon set, and two launch-ready social tiles for student creators or portfolio projects.",
    creditRange: "220-380 credits",
    expectedTime: "3-5 days",
    tradePreference: "credit trade",
    rating: 4.8,
    reviewCount: 26,
    verificationStatus: "verified_student",
    status: "active",
    responseTime: "within 8 hours",
  },
  {
    id: "listing-3",
    providerId: "profile-luca",
    providerName: "Luca Green",
    providerSchool: schools[1].name,
    providerTheme: "health",
    title: "Beginner strength accountability plan",
    category: "fitness",
    level: "Intermediate",
    description: "A weekly accountability and planning check-in designed for students starting consistent training habits.",
    creditRange: "70-120 credits",
    expectedTime: "45 minutes per session",
    tradePreference: "direct trade",
    rating: 4.7,
    reviewCount: 12,
    verificationStatus: "verified_student",
    status: "active",
    responseTime: "within 12 hours",
  },
  {
    id: "listing-4",
    providerId: "profile-jasmine",
    providerName: "Jasmine Wu",
    providerSchool: schools[0].name,
    providerTheme: "media",
    title: "Portrait mini-session and quick edit set",
    category: "photography",
    level: "Intermediate",
    description: "Campus-friendly portrait session with five polished edits for LinkedIn, portfolios, or creator pages.",
    creditRange: "160-240 credits",
    expectedTime: "90 minutes",
    tradePreference: "hybrid trade",
    rating: 4.9,
    reviewCount: 9,
    verificationStatus: "verified_student",
    status: "active",
    responseTime: "within 1 day",
  },
  {
    id: "listing-5",
    providerId: "profile-omar",
    providerName: "Omar Fields",
    providerSchool: schools[1].name,
    providerTheme: "education",
    title: "Programming study sprint for intro CS",
    category: "tutoring",
    level: "Intermediate",
    description: "Targeted help with debugging, loops, functions, and assignment prep for early CS courses.",
    creditRange: "80-140 credits",
    expectedTime: "60 minutes",
    tradePreference: "direct trade",
    rating: 4.8,
    reviewCount: 21,
    verificationStatus: "verified_student",
    status: "active",
    responseTime: "within 3 hours",
  },
  {
    id: "listing-6",
    providerId: "profile-nico",
    providerName: "Nico Bell",
    providerSchool: schools[2].name,
    providerTheme: "music",
    title: "Songwriting feedback and hook workshop",
    category: "music",
    level: "Expert",
    description: "Bring a draft and leave with stronger structure, tighter hooks, and arrangement notes.",
    creditRange: "140-260 credits",
    expectedTime: "75 minutes",
    tradePreference: "credit trade",
    rating: 4.8,
    reviewCount: 14,
    verificationStatus: "pending",
    status: "active",
    responseTime: "within 1 day",
  },
];

export const recommendedListings = listings.filter(
  (listing) => listing.providerId !== currentProfile.id,
);

export const activeTrades: ActiveTrade[] = [
  {
    id: "trade-1",
    listingTitle: "Logo refresh and social asset starter pack",
    counterpart: "Zoe Patel",
    tradeType: "hybrid trade",
    creditsHeld: 60,
    status: "in_progress",
    dueDate: "May 28",
    successCriteria:
      "Deliver a polished logo lockup, favicon, and two editable social templates.",
    lastUpdate: "Files uploaded and revision request acknowledged 2 hours ago.",
  },
  {
    id: "trade-2",
    listingTitle: "Beginner strength accountability plan",
    counterpart: "Luca Green",
    tradeType: "direct trade",
    creditsHeld: 0,
    status: "pending_completion",
    dueDate: "May 24",
    successCriteria:
      "Complete one planning session and receive a weekly schedule plus mobility routine.",
    lastUpdate: "Provider marked session complete and is waiting for confirmation.",
  },
];

export const dashboardChecklist: DashboardChecklistItem[] = [
  { id: "verify", label: "Verify student email", complete: true },
  { id: "portfolio", label: "Upload first portfolio sample", complete: true },
  { id: "second-skill", label: "Add a second offered skill", complete: false },
  { id: "first-request", label: "Request your next trade", complete: true },
];

export const messageThreads: MessageThread[] = [
  {
    id: "thread-1",
    counterpart: "Zoe Patel",
    tradeTitle: "Logo refresh and social asset starter pack",
    status: "in_progress",
    preview: "I uploaded the first two logo directions and left notes on where I need feedback.",
    unreadCount: 2,
    updatedAt: "8:42 PM",
    messages: [
      {
        id: "msg-1",
        sender: "Ava Brooks",
        sentAt: "7:56 PM",
        body: "The first direction feels strongest. Could you push the wordmark to feel a little more confident?",
      },
      {
        id: "msg-2",
        sender: "Zoe Patel",
        sentAt: "8:42 PM",
        body: "Yes. I uploaded a revised lockup and a darker social tile option. Let me know which tone fits your profile better.",
      },
    ],
  },
  {
    id: "thread-2",
    counterpart: "Luca Green",
    tradeTitle: "Beginner strength accountability plan",
    status: "pending_completion",
    preview: "Everything is ready for your confirmation whenever you finish reviewing the plan.",
    unreadCount: 0,
    updatedAt: "Earlier today",
    messages: [
      {
        id: "msg-3",
        sender: "Luca Green",
        sentAt: "1:10 PM",
        body: "I added your weekly structure and a beginner-friendly warmup sequence inside the notes panel.",
      },
    ],
  },
];

export const moderationReports: ModerationReport[] = [
  {
    id: "report-1",
    reporter: "Nina H.",
    target: "Listing: Macro coaching with aggressive cutting plan",
    reason: "Unsafe fitness claim",
    status: "under_review",
    submittedAt: "May 21, 9:15 PM",
    evidenceSummary: "Listing claims rapid fat loss outcomes and reads like medical advice.",
  },
  {
    id: "report-2",
    reporter: "Jordan T.",
    target: "Trade #4172",
    reason: "Missed delivery with no response",
    status: "open",
    submittedAt: "May 22, 2:05 PM",
    evidenceSummary: "Counterpart accepted credits but stopped replying after requesting additional files.",
  },
];

export const categoryIntro = Object.fromEntries(
  launchCategories.map((category) => [
    category.key,
    {
      title: category.name,
      description: category.description,
      accent: category.accent,
    },
  ]),
);

export function getThemeStyle(themeKey: ProfileSummary["themeKey"]) {
  const theme = fieldThemes[themeKey];

  return {
    borderColor: `${theme.primary}55`,
    background: `linear-gradient(135deg, ${theme.accent}20, white 55%)`,
  };
}