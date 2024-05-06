

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
  // // // export async function GET(req: Request, res: NextResponse, params: Params) {
  // // //   const urlId = params.id as string;
  // // //   const box = await prisma.box.findUnique({
  // // //     where: { id: urlId as string },
  // // //   });
  // // //   return res;
  //return res.status(200).json({ box: box });

  // // // }


  // // export async function GET(request: Request, context: { params: Params }) {
  // //   console.log('context', context);
  // //   const urlId = context.params.id as string;

  // //   try {
  // //     const box = await prisma.box.findUnique({
  // //       where: { id: urlId as string },
  // //     });

  // //     if (box) {
  // //       console.log('box', box);
  // //       return NextResponse.json({ box: box }, { status: 200 })
  // //     } else {
  // //       return NextResponse.json({ message: 'Box not found' }, { status: 404 })
  // //     }
  // //   } catch (error) {
  // //     return NextResponse.json({ message: 'Server Error' }, { status: 500 })
  // //   }
  // // // // // try {
  // // // // //   if (urlId) {
  // // // // //     console.log('urlId', urlId);
  // // // // //     return NextResponse.json({ message: 'Box found', id: urlId }, { status: 200 });

  // // // // //   }
  // // // // //   else {
  // // // // //     console.log('urlIdx', urlId);
  // // // // //     return NextResponse.json({ message: 'Box id not found' }, { status: 404 })
  // // // // //   }
  // // // // // }
  // // // // // catch (error) {
  // // // // //   console.log('urlIdxx', urlId);
  // // // // //   return NextResponse.json({ message: 'Server Error xxx' }, { status: 500 })
  // // // // // }

}




