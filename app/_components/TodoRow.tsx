"use client"
import React from 'react'
import { Small } from './Button'
import CheckBox from './CheckBox'
import { useNoteListContext } from '../_context/NoteListContext';

function TodoRow({ note }: { note: any | undefined }) {
  const [todos, setTodos] = useNoteListContext();
  const handleDelete = () => {
    setTodos((prev: any) => {
      return prev.filter((todo: any) => todo !== note)
    })
  }
  return (
    <div className='flex  group gap-8  pl-3 border border-slate-500 border-opacity-30 rounded-xl justify-between hover:scale-105'>
      <div className=''>

      <CheckBox note={note}/>
      </div>
      <div className='group-hover:visible invisible' onClick={handleDelete}>
        <Small />
      </div>
    </div>
  )
}

export default TodoRow
