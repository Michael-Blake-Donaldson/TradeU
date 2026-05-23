import { PublicShell } from "@/components/tradeu/public-shell";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PublicShell>{children}</PublicShell>;
}