"use client"

import React from 'react'

export function Big() {
  return (
    <div className='bg-green-600 p-1 rounded active:bg-green-800'>
      Add Note
    </div>
  )
}

export function Small(){
    return(
        <div>
            <button className='bg-green-600 p-1 rounded w-8 h-8 active:bg-red-700'>X</button>
        </div>
    )
}


