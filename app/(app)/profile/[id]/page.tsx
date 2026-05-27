import { notFound } from "next/navigation";

import { currentProfile, listings } from "@/lib/mock/tradeu";
import { ProfileDynamicView } from "@/components/tradeu/profile-dynamic-view";

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (id !== currentProfile.id) {
    notFound();
  }

  const offeredListings = listings.filter((listing) => listing.providerId === currentProfile.id);

  return <ProfileDynamicView profile={currentProfile} offeredListings={offeredListings} />;
}