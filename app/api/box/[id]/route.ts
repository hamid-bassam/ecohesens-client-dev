

import { NextResponse } from 'next/server';

type Params = {
  id: string
}

export async function GET(request: Request, context: { params: Params }) {
  console.log('context', context);
  const urlId = context.params.id as string;

  //   // try {
  //   //   const box = await prisma.box.findUnique({
  //   //     where: { id: id as string },
  //   //     include: {
  //   //       suggestions: {
  //   //         include: {
  //   //           product: true,
  //   //         }
  //   //       }
  //   //     }
  //   //   });

  //   //   if (box) {
  //   //     return NextResponse.json({ box: box }, { status: 200})
  //   //   } else {
  //   //     return NextResponse.json({ message: 'Box not found' }, { status: 404})
  //   //   }
  //   // } catch (error) {
  //   //   return NextResponse.json({ message: 'Server Error' }, { status: 500})
  //   // }
  try {
    if (urlId) {
      console.log('urlId', urlId);
      return NextResponse.json({ message: 'Box found', id: urlId }, { status: 200 });

    }
    else {
      console.log('urlIdx', urlId);
      return NextResponse.json({ message: 'Box id not found' }, { status: 404 })
    }
  }
  catch (error) {
    console.log('urlIdxx', urlId);
    return NextResponse.json({ message: 'Server Error xxx' }, { status: 500 })
  }

}
