
import EmptyState from "@/app/common/components/layout/EmptyState";

import getCurrentUser from "@/app/common/actions/getCurrentUser";
import getFavoriteListings from "@/app/common/actions/getFavoriteListings";

import FavoritesClient from "./FavoritesClient";

const ListingPage = async () => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return <EmptyState
      title="No favorites found"
      subtitle="Looks like you have no favorite listings."
    />
  }

  return (
    <FavoritesClient
      listings={listings}
      currentUser={currentUser}
    />
  );
}
 
export default ListingPage;
