import prisma from "@/libs/prismadb";
import { User } from "@prisma/client";

interface IParams {
  currentUser: User
}

export default async function getFavoriteListings(params: IParams) {
  try {
    const { currentUser } = params;

    const favorites = await prisma.listing.findMany({
      where: {
        id: {
          in: [...(currentUser.favoriteIds || [])]
        }
      }
    });

    return favorites;
  } catch (error: any) {
    throw new Error(error);
  }
}
