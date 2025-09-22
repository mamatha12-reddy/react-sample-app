import React, { useActionState, useEffect,useState ,useContext} from "react";
import axios from "axios";
import { ThemeContext } from "../createcontextfunction/ThemeProvider";
export const FethingData=()=>{

  const {user}=useContext(ThemeContext)
  console.log("user info===",user)
  const fetchDataFun=async()=>{
    const response= await fetch('http://localhost:4005')
    const data= await response.json()
   // console.log("the data coming===",data)
  }
  useEffect(()=>{
      
fetchDataFun()
  },[])

  const config={headers:{
    Authorization:`Bearer `
  }}

  const [name,setName]=useState('mamatha')
  const [age,setAge]=useState(25)
  const [obj,setObj]=useState({})

  const handleFormData=async(e)=>{
    e.preventDefault()
    console.log('hello.....')
      obj.name=name
      obj.age=age
      setObj(obj)
      console.log("the obj====",obj)
     /*const res=await fetch(`http://localhost:4005/user/${5}`,{
      method:'POST',
     
      body:JSON.stringify(obj),
      headers:{"Content-type":"application/json;charset=UTF-8"},
     })
     const data=await res.json()
     console.log("the post respionse cominff===",data)*/
     const res=await axios.post(`http://localhost:4005/user/${5}`,obj)
     console.log("the post respionse cominff===",res.data)
     localStorage.setItem('userInfo',JSON.stringify(res.data))
  }

  return(
    <form onSubmit={(e)=>handleFormData(e)}>
      <h1>Hai,Welcome!</h1>
      <input value={name} onChange={(e)=>setName(e.target.value)}/>
      <input value={age} onChange={(e)=>setAge(e.target.value)}/>
      <button type={"submit"}>Submit</button>
    </form>
  )
}