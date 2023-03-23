
import EmptyState from "@/app/common/components/layout/EmptyState";

import getCurrentUser from "@/app/common/actions/getCurrentUser";
import getFavoriteListings from "@/app/common/actions/getFavoriteListings";

import FavoritesClient from "./FavoritesClient";

const ListingPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <EmptyState 
        title="Unauthorized" 
        subtitle="Please login"
      />
    );
  }

  const listings = await getFavoriteListings({ currentUser });

  if (!listings) {
    return <EmptyState />
  }

  return (
    <FavoritesClient
      listings={listings}
      currentUser={currentUser}
    />
  );
}
 
export default ListingPage;
