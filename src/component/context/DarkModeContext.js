import React, { createContext, useState } from 'react'

export const DarkModeContext=createContext()

export default function DarkModeProvider({children}) {

  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode=()=>{
    setDarkMode((prev)=>!prev)
  }

  return (
    <DarkModeContext.Provider value={{darkMode:darkMode, toggleDarkMode}}>
      {children}
    </DarkModeContext.Provider>
  )
}
