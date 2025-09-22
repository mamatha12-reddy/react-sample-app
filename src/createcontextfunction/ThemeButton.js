import react, { useContext } from "react";
import {ThemeContext} from './ThemeProvider'

 export const ThemeButton=()=>{
  const {theme,toggleTheme}=useContext(ThemeContext)
  console.log("theme===",theme,toggleTheme)
  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}