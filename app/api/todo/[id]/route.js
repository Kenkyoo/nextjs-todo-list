import { NextResponse } from "next/server";
import { prisma } from "@/db";

export async function PATCH(req, context) {
  const { id } = context.params;
  const { completed } = await req.json();

  await prisma.todo.update({
    where: { id },
    data: { complete: completed },
  });

  return NextResponse.json({ message: "Updated" }, { status: 200 });
}

export async function DELETE(req, context) {
  const { id } = context.params;

  await prisma.todo.delete({
    where: { id },
  });

  return NextResponse.json({ message: "Deleted Item" }, { status: 200 });
}
