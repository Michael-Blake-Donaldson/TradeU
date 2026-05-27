import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CircleCheckBig, ShieldCheck } from "lucide-react";

import { siteNavigation } from "@/lib/constants/tradeu";

export function PublicShell({ children }: { children: React.ReactNode }) {
  const headerNavigation = siteNavigation.filter((item) => item.href !== "/login" && item.href !== "/signup");

  return (
    <div className="page-shell min-h-screen">
      <header className="sticky top-0 z-40 border-b border-white/60 bg-white/72 backdrop-blur-xl">
        <div className="mx-auto w-full max-w-[1600px] px-4 py-4 sm:px-6 lg:px-10">
          <div className="surface-soft path-network rounded-[30px] px-4 py-4 sm:px-6">
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
              <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="TradeU home">
                <Image
                  src="/TradeULogo.png"
                  alt="TradeU"
                  width={420}
                  height={133}
                  className="h-14 w-auto shrink-0 object-contain sm:h-16 lg:h-20"
                  priority
                />
                <div className="hidden sm:block">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Campus ecosystem</p>
                  <p className="text-sm text-slate-700">Opportunity is moving around you.</p>
                </div>
              </Link>

              <nav className="hidden items-center gap-2 text-sm font-medium md:flex">
                {headerNavigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full px-4 py-2 text-slate-700 transition hover:bg-white hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center gap-2 sm:gap-3">
                <Link
                  href="/login"
                  className="hidden rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-white sm:inline-flex"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="inline-flex items-center gap-1 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-strong"
                >
                  Join TradeU
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="mt-16 border-t border-slate-200/70 bg-white/72">
        <div className="mx-auto w-full max-w-[1600px] px-4 py-10 sm:px-6 lg:px-10">
          <div className="surface rounded-[34px] px-6 py-8 sm:px-8">
            <div className="grid gap-7 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="space-y-4">
                <Image
                  src="/TradeULogo.png"
                  alt="TradeU"
                  width={380}
                  height={121}
                  className="h-16 w-auto object-contain sm:h-20"
                />
                <p className="max-w-xl text-base leading-7 text-slate-700">
                  TradeU is a modern campus ecosystem where students exchange real skills, build trusted proof of work,
                  and grow before graduation.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1">
                    <CircleCheckBig className="h-3.5 w-3.5 text-emerald-600" />
                    Verified identity
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-sky-600" />
                    Trust checkpoints
                  </span>
                </div>
              </div>

              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
                {siteNavigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="inline-flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-primary/30 hover:text-primary"
                  >
                    {item.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-7 border-t border-slate-200 pt-4 text-xs text-muted">
              Copyright {new Date().getFullYear()} TradeU. Designed for trusted campus collaboration.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}