
import EmptyState from "@/app/common/components/layout/EmptyState";

import getCurrentUser from "@/app/common/actions/getCurrentUser";
import getReservations from "@/app/common/actions/getReservations";

import TripsClient from "./ReservationsClient";

const ReservationsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState
      title="Unauthorized"
      subtitle="Please login"
    />
  }

  const reservations = await getReservations({ authorId: currentUser.id });

  if (reservations.length === 0) {
    return <EmptyState
      title="No reservations found"
      subtitle="Looks like you have no reservations on your properties."
    />
  }

  return (
    <TripsClient
      reservations={reservations}
      currentUser={currentUser}
    />
  );
}
 
export default ReservationsPage;
