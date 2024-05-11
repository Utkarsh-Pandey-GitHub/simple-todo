"use client"
import  { useState } from 'react'
import React from 'react'
import { Big } from './Button'
import { useNoteListContext } from '../_context/NoteListContext'

function AddNote() {
  const [note,setNote] = useState('');
  const [todos,setTodos]=useNoteListContext();
  const addNote = () => {
    setTodos((prev:any)=>{return [...prev,note]})
  }
  return (
    <div className='flex gap-1 my-2'>
      <input type="text" className='text-black' onChange={(e)=>setNote(e.target.value)}/>
      <div onClick={addNote}>
        <Big />
      </div>
    </div>
  )
}

export default AddNote
