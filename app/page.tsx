"use client"
import Image from "next/image";
import { useState } from "react";
import TodoRow from "./_components/TodoRow";
import AddNote from "./_components/AddNote";
import { useNoteListContext } from "./_context/NoteListContext";

export default function Home() {

  const [todos, setTodos] = useNoteListContext();
  

  return (
    <div className="flex place-items-center flex-col ">
      <p className="text-3xl font-bold">Todo</p>
      <AddNote />
      <div className="flex flex-col-reverse gap-1 min-w-48">

      {
        todos && todos.map((todo:any)=>(
          <TodoRow note={todo}/>
        ))
      }
      </div>
    </div>
  );
}
