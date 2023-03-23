
import EmptyState from "@/app/common/components/layout/EmptyState";

import getCurrentUser from "@/app/common/actions/getCurrentUser";
import getFavoriteListings from "@/app/common/actions/getFavoriteListings";

import FavoritesView from "./FavoritesView";

const ListingPage = async () => {
  const currentUser = await getCurrentUser();
  const listings = await getFavoriteListings({ currentUser });

  if (!listings) {
    return <EmptyState />
  }

  return (
    <FavoritesView
      listings={listings}
      currentUser={currentUser}
    />
  );
}
 
export default ListingPage;
