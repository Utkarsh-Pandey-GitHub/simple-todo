"use client"
import React from 'react'
import { Small } from './Button'
import CheckBox from './CheckBox'
import { useNoteListContext } from '../_context/NoteListContext';

function TodoRow({ text }: { text: any | undefined }) {
  const [todos, setTodos] = useNoteListContext();
  const handleDelete = () => {
    setTodos((prev: any) => {
      return prev.filter((todo: any) => todo !== text)
    })
  }
  return (
    <div className='flex  group gap-8  pl-3 border border-slate-500 rounded-lg justify-between'>
      <CheckBox text={text}/>
      <div className='group-hover:visible invisible' onClick={handleDelete}>
        <Small />
      </div>
    </div>
  )
}

export default TodoRow
