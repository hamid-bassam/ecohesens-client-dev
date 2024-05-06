"use server"

import prisma from "../../src/lib/prisma";

export const getBoxById = async (id: string) => {
  // set timeout
  await new Promise(resolve => setTimeout(resolve, 5000));

  const box = await prisma.box.findUnique({
    where: { id: id as string }
  });

  return box;

}