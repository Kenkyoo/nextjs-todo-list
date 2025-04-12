import { NextResponse } from "next/server";
import { prisma } from "@/db";
import { userId } from "@/lib/auth";

export async function POST(req: Request) {
  const userID = await userId();
  const { title, todoListId } = await req.json();

  if (userID || todoListId) {
    if (typeof title !== "string" || title.length === 0) {
      throw new Error("That can't be a title");
    }
    await prisma.todo.create({
      data: { title, todoListId, complete: false, userId: userID ?? "" },
    });

    return NextResponse.json({ message: "Created Todo" }, { status: 200 });
  } else {
    return NextResponse.json({ error: "Not Found" }, { status: 404 });
  }
}

export async function DELETE() {
  await prisma.todo.deleteMany({});
  return NextResponse.json({ message: "All Todos Deleted" }, { status: 200 });
}
