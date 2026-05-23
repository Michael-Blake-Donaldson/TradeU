import { AppShell } from "@/components/tradeu/app-shell";
import { AppAuthGate } from "@/components/tradeu/app-auth-gate";

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppAuthGate>
      <AppShell>{children}</AppShell>
    </AppAuthGate>
  );
}