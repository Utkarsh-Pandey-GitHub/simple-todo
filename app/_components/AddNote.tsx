"use client"
import { useState } from 'react'
import React from 'react'
import { Big } from './Button'
import { useNoteListContext } from '../_context/NoteListContext'

function AddNote() {
  const [note, setNote] = useState('');
  const [todos, setTodos] = useNoteListContext();
  const addNote = () => {
    if (!note) {
      return
    }
    setTodos((prev: any) => { return [...prev, {text:note,check:false}] })
    setNote('')
  }
  return (
    <div className='flex gap-1 mt-2 mb-5'>
      <div className='rounded-lg'>
        <input type="text" className='text-slate-800  p-1 rounded-lg text-center' onChange={(e) => setNote(e.target.value)} placeholder='Write a note!' value={note}/>
      </div>
      <div onClick={addNote}>
        <Big />
      </div>
    </div>
  )
}

export default AddNote
