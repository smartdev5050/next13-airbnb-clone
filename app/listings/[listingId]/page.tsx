
import getCurrentUser from "@/app/common/actions/getCurrentUser";
import getListingById from "@/app/common/actions/getListingById";
import getReservations from "@/app/common/actions/getReservations";

import EmptyState from "@/app/common/components/layout/EmptyState";

import ListingClient from "./ListingClient";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {

  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return <EmptyState />
  }

  return (
    <ListingClient
      listing={listing}
      reservations={reservations}
      currentUser={currentUser}
    />
  );
}
 
export default ListingPage;
