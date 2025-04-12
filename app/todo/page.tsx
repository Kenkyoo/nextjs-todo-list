import { NewList } from "@/components/lists/newList";
import { ListItems } from "@/components/lists/todoList";
import { userId } from "@/lib/auth";
import { NewTodo } from "@/components/todos/newTodo";
import { TodoItem } from "@/components/todos/todoItem";
import { prisma } from "@/db";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function Todo({ searchParams }: { searchParams: any }) {
  const userID = await userId();

  const lists = await prisma.todoList.findMany({
    where: { userId: userID },
  });

  const selectedListId = searchParams?.list || lists[0]?.id;

  const selectedList = lists.find((list) => list.id === selectedListId);
  const listName = selectedList?.name;

  const todos = await prisma.todo.findMany({
    where: {
      userId: userID,
      todoListId: selectedListId,
    },
  });
  return (
    <>
      <Navbar />
      <div className="drawer lg:drawer-open">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col flex-1 h-screen overflow-y-auto px-5 mx-2 bg-base-200">
          <div className="breadcrumbs text-sm">
            <ul>
              <li>
                <a>Listas</a>
              </li>
              <li>
                <a>{listName}</a>
              </li>
            </ul>
          </div>
          {selectedListId ? (
            <>
              <NewTodo todoListId={selectedListId} />
              <TodoItem todos={todos} title={listName || "Untitled List"} />
            </>
          ) : (
            <p className="text-center text-slate-500 mt-10">
              Selecciona o crea una lista
            </p>
          )}
        </div>

        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay" />

          <div className="flex flex-col w-80 bg-base-300 px-3 py-2 gap-3 h-full">
            <div className="flex items-center justify-center h-16 bg-base-200">
              <span className="text-secondary font-bold uppercase">
                To-do App
              </span>
            </div>
            <NewList />
            <ListItems todoList={lists} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
