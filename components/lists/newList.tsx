"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const NewList = () => {
  const [newItem, setNewItem] = useState("");

  const router = useRouter();
  const create = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    await fetch(`/api/list`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newItem,
      }),
    });

    router.refresh();
    setNewItem("");
  };
  return (
    <div>
      <form onSubmit={create}>
        <input
          type="text"
          name="title"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="New todo"
          className="input input-primary mx-1"
          required
        />
      </form>
    </div>
  );
};
