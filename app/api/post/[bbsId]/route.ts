import { NextResponse } from "next/server";
import prisma from "../../../../lib/prismaClient";

export async function GET(
  req: Request,
  { params }: { params: { bbsId: string } }
) {
  const bbsId = params.bbsId;
  const bbsDetailData = await prisma.board.findUnique({
    where: {
      id: parseInt(bbsId),
    },
  });
  return NextResponse.json(bbsDetailData);
}
