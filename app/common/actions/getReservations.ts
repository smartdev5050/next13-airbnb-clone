import prisma from "@/libs/prismadb";

interface IParams {
  listingId?: string;
  userId?: string;
  authorId?: string;
}

export default async function getReservations(params: IParams) {
  const { listingId, userId, authorId } = params;

  const query: any = {};
      
  if (listingId) {
    query.listingId = listingId;
  };

  if (userId) {
    query.userId = userId;
  }

  if (authorId) {
    query.listing = { userId: authorId };
  }

  const reservations = await prisma.reservation.findMany({
    where: query,
    include: {
      listing: true
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  return reservations;
}
