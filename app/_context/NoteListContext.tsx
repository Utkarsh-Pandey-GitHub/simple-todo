"use client"
import React, { createContext, useContext, useState } from "react";

const NoteListContext = createContext<any |null>(null)


export const useNoteListContext=()=>{
    return useContext(NoteListContext);
}


export function NoteListContextProvider(
    {children}
    :
    {
        children:React.ReactNode
    }
){
    const [todos, setTodos] = useState<any[]>([1,2,3,4,5,6,7,8,9,10])
    return (
    <NoteListContext.Provider value={[todos,setTodos]}>
        {children}
    </NoteListContext.Provider>
    )
}