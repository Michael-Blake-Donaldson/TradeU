import Link from "next/link";
import Image from "next/image";

import { siteNavigation } from "@/lib/constants/tradeu";
import { PublicThemeSwitcher } from "@/components/tradeu/public-theme-switcher";

export function PublicShell({ children }: { children: React.ReactNode }) {
  const headerNavigation = siteNavigation.filter((item) => item.href !== "/login");

  return (
    <div className="page-shell min-h-screen">
      <header className="sticky top-0 z-40 border-b border-white/70 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="TradeU home">
            <Image
              src="/tradeu-logo.png"
              alt="TradeU"
              width={220}
              height={70}
              className="h-14 w-auto"
              priority
            />
            <div>
              <p className="text-xs text-muted sm:text-sm">Trade skills. Gain experience.</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            {headerNavigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-primary">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <PublicThemeSwitcher />
            <Link
              href="/login"
              className="hidden px-2 py-2 text-sm font-medium text-slate-700 transition hover:text-primary sm:inline-flex"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-strong"
            >
              Join TradeU
            </Link>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-slate-200/80 bg-white/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-10 text-sm text-muted sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <Image src="/tradeu-logo.png" alt="TradeU" width={176} height={56} className="h-12 w-auto" />
            <div>
            <p>Student-first skill trading built for reputation, trust, and growth.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            {siteNavigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-primary">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}