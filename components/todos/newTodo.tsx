"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export const NewTodo = ({ todoListId }: { todoListId: string }) => {
  const [newItem, setNewItem] = useState("");

  const router = useRouter();
  const create = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    await fetch(`/api/todo`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newItem,
        todoListId: todoListId,
      }),
    });

    router.refresh();
    setNewItem("");
  };
  return (
    <div className="my-4 mx-auto">
      <form onSubmit={create}>
        <div className="flex gap-2 mx-auto w-full">
          <input
            type="text"
            name="title"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="New todo"
            className="input input-primary"
            required
          />
          <div
            className="tooltip tooltip-accent"
            data-tip="añade una nueva tarea"
          >
            <button type="submit" className="btn btn-primary">
              add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
