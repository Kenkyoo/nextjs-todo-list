import { NextResponse } from "next/server";
import { prisma } from "@/db";

/* eslint-disable @typescript-eslint/no-explicit-any */
export async function DELETE(context: any) {
  const { id } = context.params;

  await prisma.todoList.delete({
    where: { id },
  });

  return NextResponse.json({ message: "Deleted List" }, { status: 200 });
}
