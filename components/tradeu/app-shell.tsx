import Link from "next/link";
import { Bell, Compass, LayoutDashboard, MessagesSquare, Shield, UserRound } from "lucide-react";

import { currentProfile } from "@/lib/mock/tradeu";
import { fieldThemes } from "@/lib/constants/tradeu";
import { VerificationBadge } from "@/components/tradeu/status-badge";

const appNav = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/onboarding", label: "Onboarding", icon: UserRound },
  { href: "/browse", label: "Browse", icon: Compass },
  { href: `/profile/${currentProfile.id}`, label: "Profile", icon: UserRound },
  { href: "/trades", label: "Trades", icon: Bell },
  { href: "/messages", label: "Messages", icon: MessagesSquare },
  { href: "/admin", label: "Admin", icon: Shield },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const theme = fieldThemes[currentProfile.themeKey];

  return (
    <div className="min-h-screen bg-slate-100/80">
      <div className="mx-auto grid min-h-screen max-w-[1600px] gap-6 px-4 py-4 lg:grid-cols-[280px_minmax(0,1fr)] lg:px-6">
        <aside className="surface rounded-[32px] p-5 lg:sticky lg:top-4 lg:h-[calc(100vh-2rem)]">
          <div
            className="rounded-[28px] border p-5"
            style={{ borderColor: `${theme.primary}40`, background: `${theme.accent}1f` }}
          >
            <p className="section-heading text-xl font-semibold text-ink">TradeU</p>
            <p className="mt-1 text-sm text-slate-600">Student command center</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <VerificationBadge status={currentProfile.verificationStatus} />
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                {currentProfile.tier}
              </span>
            </div>
            <div className="mt-5">
              <p className="text-sm font-semibold text-ink">{currentProfile.name}</p>
              <p className="text-sm text-slate-600">{currentProfile.fieldOfStudy}</p>
              <p className="text-sm text-slate-600">{currentProfile.school.name}</p>
            </div>
          </div>

          <nav className="mt-6 grid gap-2">
            {appNav.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-6 rounded-[28px] bg-slate-950 px-5 py-5 text-white">
            <p className="text-sm text-slate-300">Current credit balance</p>
            <p className="mt-2 text-3xl font-semibold">{currentProfile.credits}</p>
            <p className="mt-3 text-sm text-slate-300">
              Credits remain a ledger-backed trust mechanism, not a fake currency layer.
            </p>
          </div>
        </aside>

        <div className="flex min-w-0 flex-col gap-6">
          <header className="surface flex flex-wrap items-center justify-between gap-4 rounded-[28px] px-6 py-5">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                MVP workspace preview
              </p>
              <h1 className="section-heading text-2xl font-semibold text-ink">
                Build the core student trade loop before expanding the platform.
              </h1>
            </div>
            <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
              On-platform communication only
            </div>
          </header>

          <main className="min-w-0">{children}</main>
        </div>
      </div>
    </div>
  );
}