import react,{useEffect, useRef,useState} from "react";

export const UseRefHook=()=>{
  console.log("parent")
  const [count,setCount]=useState(0)
  const nameRef=useRef('mamatha')
  const emailRef=useRef('mamatha@123')
  const renderCount = useRef(0);
  const videoRef = useRef(null);

  const buttonClick=()=>{//Function Expression

    console.log(nameRef.current.value)
    emailRef.current.focus()
    setCount(count+1)

  }
  useEffect(()=>{
    renderCount.current++
  })
  useEffect(() => {
    // Automatically play the video when the component mounts
   // videoRef.current.play();
  }, []);

  return(
    <div>
      <input type="text" ref={nameRef} defaultValue={"mamathsa"}/>
      <input type="text" ref={emailRef}/>
      <button onClick={()=>buttonClick()}>Click Button</button>
      <h1>useRef Hook!</h1>
      <h1>Component re-render:-{renderCount.current}</h1>
      <video ref={videoRef} width="600" controls>
        <source src="video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}