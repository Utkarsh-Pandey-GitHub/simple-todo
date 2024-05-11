"use client"

import React, { useState } from 'react'
import { useNoteListContext } from '../_context/NoteListContext'

function CheckBox({ note}: { note: any | undefined }) {
  const [todos, setTodos] = useNoteListContext();
  function handleChange() {
    setTodos((prev: any) => {
      return prev.map((todo: any) => {
        if (todo === note) {
          return { ...todo, check: !todo.check }
        }
        return todo
      })
    })

  }
  return (
    <div className='flex gap-1 place-items-center  '>
      <input type="checkbox" checked={note.check} onChange={handleChange} />
      <p className={`${note.check && "line-through"}`} >{note.text}</p>
    </div>
  )
}

export default CheckBox
