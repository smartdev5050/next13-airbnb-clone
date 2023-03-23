import { NextApiRequest, NextApiResponse } from "next";

import serverAuth from "@/libs/serverAuth";
import prisma from "@/libs/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST' && req.method !== 'DELETE') {
    return res.status(405).end();
  }

  try {
    const { currentUser } = await serverAuth(req);
    const { listingId } = req.query;

    if (!listingId || typeof listingId !== 'string') {
      throw new Error('Invalid ID');
    }

    let favoriteIds = [...(currentUser.favoriteIds || [])];

    if (req.method === 'POST') {
      favoriteIds.push(listingId);
    }

    if (req.method === 'DELETE') {
      favoriteIds = favoriteIds.filter((id) => id !== listingId);
    }

    const user = await prisma.user.update({
      where: {
        id: currentUser.id
      },
      data: {
        favoriteIds
      }
    });

    return res.status(200).json(user)
  } catch (error: any) {
    console.log(error);
    return res.status(400).json({ error: error?.message });
  }
}
