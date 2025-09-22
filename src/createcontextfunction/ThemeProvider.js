import react,{createContext, useEffect, useState} from "react";

const ThemeContext=createContext()

function ThemeProvider({children}){
  const [theme,setTheme]=useState("light")
  const [user,setUser]=useState()
  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem("userInfo")))
  },[])
  const toggleTheme=()=>{
    setTheme((prev)=>prev==="ligth"?'dark':'light')

  }
  return(
    <ThemeContext.Provider value={{theme,toggleTheme,user}}>
      {children}
    </ThemeContext.Provider>
  )

}
export  {ThemeContext,ThemeProvider}
/*
import {ThemeProvider} from '././createcontextfunction/ThemeProvider'
import { ThemeButton } from "./createcontextfunction/ThemeButton";

const App = () => {

  return(
    <ThemeProvider>
      <ThemeButton/>
    </ThemeProvider>
  )
 
};*/