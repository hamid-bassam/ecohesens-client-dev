import { Prisma } from "@prisma/client";
import prisma from "../../src/lib/prisma";

//template
// async function fetchBox(id: string) {
//   const response = await fetch(`/api/box/${id}`);

//   if (!response.ok) {
//     throw new Error('Failed to fetch id');
//   }
//   if (response.ok) {
//     return response.json();
//   }
// }


async function getBox(id: string) {

  return (

    await prisma.box.findUnique({
      where: { id: id as string },
      include: {
        user: {
          select: {
            id: true,
            firstname: true,
            lastname: true,
            email: true,
          },

        },
        suggestions: {
          select: {
            id: true,
            products: {
              include: {
                product: true,
              },
              // select: {
              //   isVariant: true,
              // }
            }
          }
        }
      },
    })
  );
}

// TODO hamid prisma type 
export type BoxState = Prisma.PromiseReturnType<typeof getBox>

export { getBox };

