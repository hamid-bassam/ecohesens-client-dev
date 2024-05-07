

import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../src/lib/prisma';

type Params = {
  id: string
}


export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query; // Obtenez l'id de l
    console.log("URLL" + id);

    if (!id || typeof id !== 'string') {
      return res.status(400).json({ error: 'Invalid request, id is required' });
    }

    const box = await prisma.box.findUnique({
      where: { id },
    });

    if (!box) {
      return res.status(404).json({ error: 'Box not found' });
    }

    return res.status(200).json(box);
  } catch (error) {
    console.error('Failed to fetch box:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }


}




