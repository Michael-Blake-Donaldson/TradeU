"use client";

import { useEffect } from "react";
import { Loader2 } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { useAuth } from "@/hooks/use-auth";

export function AppAuthGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { status, isLoading } = useAuth();

  useEffect(() => {
    if (status !== "unauthenticated") {
      return;
    }

    const next = pathname?.startsWith("/") ? pathname : "/dashboard";
    router.replace(`/login?next=${encodeURIComponent(next)}`);
  }, [pathname, router, status]);

  if (isLoading || status === "unauthenticated") {
    return (
      <div className="surface flex min-h-[320px] items-center justify-center rounded-[28px] p-8">
        <div className="inline-flex items-center gap-3 text-sm font-semibold text-slate-600">
          <Loader2 className="h-4 w-4 animate-spin" />
          Verifying your session...
        </div>
      </div>
    );
  }

  return <>{children}</>;
}