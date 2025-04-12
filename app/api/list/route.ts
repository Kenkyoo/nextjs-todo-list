import { NextResponse } from "next/server";
import { prisma } from "@/db";
import { userId } from "@/lib/auth";

export async function POST(req: Request) {
  const userID = await userId();
  const { name } = await req.json();

  if (userID) {
    if (typeof name !== "string" || name.length === 0) {
      throw new Error("That can't be a title");
    }
    await prisma.todoList.create({
      data: { name, userId: userID ?? "" },
    });

    return NextResponse.json({ message: "Created List" }, { status: 200 });
  } else {
    return NextResponse.json({ error: "Not Found" }, { status: 404 });
  }
}

export async function DELETE() {
  await prisma.todoList.deleteMany({});
  return NextResponse.json({ message: "All Lists Deleted" }, { status: 200 });
}
