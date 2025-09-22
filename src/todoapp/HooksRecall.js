import react from 'react'
import React, { memo } from 'react'

export const HooksRecall=(props)=>{
  console.log("HOOKSRECALL CHILD")
  return(
    <>
    <h1>{props.name}</h1>
    <button onClick={()=>props.changeName()}>changeName</button>
    </>
  )
}


/*export const HooksRecall=React.memo(()=>{
  console.log("HOOKSRECALL CHILD")
  return(
    <div>hello</div>
  )
})*/
 