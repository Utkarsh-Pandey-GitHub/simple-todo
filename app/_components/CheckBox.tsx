"use client"

import React, { useState } from 'react'

function CheckBox({ text }: { text: any | undefined }) {
    const [check, setCheck] = useState(false);
    
  return (
    <div className='flex gap-1 place-items-center'>
      <input type="checkbox" checked={check} onChange={(e)=>{setCheck(prev=>!prev)}}/>
      <p className={`${check && "line-through"}`}>{text}</p>
    </div>
  )
}

export default CheckBox
