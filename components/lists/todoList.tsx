"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { TodoList } from "@prisma/client";
import Link from "next/link";
import clsx from "clsx";

export const ListItems = ({ todoList }: { todoList: TodoList[] }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedListId = searchParams.get("list");

  const deleteTodo = async (todoList: TodoList) => {
    await fetch(`/api/list/${todoList.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: todoList.id,
      }),
    });

    router.refresh();
  };

  return (
    <>
      <ul className="menu bg-base-200 rounded-box w-full">
        <li className="menu-title">My Lists</li>
        {todoList.map((list) => {
          const isActive = list.id === selectedListId;
          return (
            <div key={list.id}>
              <li
                className={clsx("flex-1", {
                  "text-base font-bold bg-secondary rounded": isActive,
                })}
              >
                <div className="flex flex-row justify-between">
                  <a>
                    <Link href={`/todo?list=${list.id}`}>{list.name}</Link>
                  </a>
                  <a onClick={() => deleteTodo(list)} className="text-base">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 text-primary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </a>
                </div>
              </li>
            </div>
          );
        })}
      </ul>
    </>
  );
};
