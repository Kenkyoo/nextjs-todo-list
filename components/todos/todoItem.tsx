"use client";
import { useRouter } from "next/navigation";
import { Todo } from "@prisma/client";
import { useRef, useEffect } from "react";
import autoAnimate from "@formkit/auto-animate";

interface TodoItemProps {
  todos: Todo[];
  title: string;
}

export const TodoItem = ({ todos, title }: TodoItemProps) => {
  const router = useRouter();
  const parentRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, []);

  const update = async (todo: Todo) => {
    await fetch(`/api/todo/${todo.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: !todo.complete,
      }),
    });
    router.refresh();
  };

  const deleteTodo = async (todo: Todo) => {
    await fetch(`/api/todo/${todo.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: todo.id,
      }),
    });

    router.refresh();
  };
  return (
    <>
      <ul
        ref={parentRef}
        className="list bg-base-100 rounded-box shadow-md mx-auto mt-4 w-full"
      >
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">{title}</li>
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              className={`list-row transition-colors ${
                todo.complete ? "line-through opacity-75" : ""
              }`}
            >
              <div>
                <div>{todo.title}</div>
                <div className="text-xs uppercase font-semibold opacity-60">
                  {todo.updatedAt.toDateString()}
                </div>
              </div>
              <div className="flex gap-2 justify-end">
                <button className="btn btn-square btn-ghost">
                  <input
                    type="checkbox"
                    name="check"
                    checked={todo.complete}
                    onChange={() => update(todo)}
                    className="checkbox checkbox-primary float-right size-6"
                  />
                </button>
                <div
                  className="tooltip tooltip-accent"
                  data-tip="eliminar tarea"
                >
                  <button
                    onClick={() => deleteTodo(todo)}
                    className="btn btn-square btn-ghost"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 text-secondary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
