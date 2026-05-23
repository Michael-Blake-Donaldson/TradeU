import type { TradeStatus, VerificationStatus } from "@/lib/types/tradeu";
import { cn } from "@/lib/utils";

const tradeStatusClasses: Record<TradeStatus, string> = {
  requested: "bg-slate-100 text-slate-700",
  accepted: "bg-sky-100 text-sky-700",
  in_progress: "bg-indigo-100 text-indigo-700",
  pending_completion: "bg-amber-100 text-amber-800",
  completed: "bg-emerald-100 text-emerald-700",
  disputed: "bg-rose-100 text-rose-700",
};

const verificationClasses: Record<VerificationStatus, string> = {
  unverified: "bg-slate-100 text-slate-700",
  pending: "bg-amber-100 text-amber-800",
  verified_student: "bg-sky-100 text-sky-700",
  rejected: "bg-rose-100 text-rose-700",
};

export function TradeStatusBadge({ status }: { status: TradeStatus }) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-3 py-1 text-xs font-semibold capitalize",
        tradeStatusClasses[status],
      )}
    >
      {status.replaceAll("_", " ")}
    </span>
  );
}

export function VerificationBadge({
  status,
}: {
  status: VerificationStatus;
}) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-3 py-1 text-xs font-semibold capitalize",
        verificationClasses[status],
      )}
    >
      {status === "verified_student" ? "Verified student" : status.replaceAll("_", " ")}
    </span>
  );
}