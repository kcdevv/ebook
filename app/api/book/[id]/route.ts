import { prisma } from "@/app/config/db";
import { NextResponse } from "next/server";

export async function GET({ params }: { params: { id: string } }) {
  const { id } = params;
  const book = await prisma.book.findUnique({
    where: {
      id,
    },
  });
  return NextResponse.json({
    book,
  });
}
