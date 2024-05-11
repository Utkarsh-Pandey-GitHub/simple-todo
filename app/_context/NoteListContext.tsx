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
    const [todos, setTodos] = useState<any[]>([])
    return (
    <NoteListContext.Provider value={[todos,setTodos]}>
        {children}
    </NoteListContext.Provider>
    )
}