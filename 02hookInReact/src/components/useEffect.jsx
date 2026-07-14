import React from "react";
import {useState,useEffect}from "react";

function HookTwo(){
  
  
  const [x,setX]=useState('unchanged');
  const changeX=()=>{
    setX('changed')
  }


  // useEffect (call_back_fun, d) => d=nothing,d=[],d=[variable]
  //for nothing the useeeffect run the function everytimes when
  // anything get change in this compponent
  //for d=[] run once when this looded
  //d=[vars] tringer when vars get changes
  
  
  // const [n,setNum]=useState(0)
  let n=0; // comment when other uncomment
  // useEffect(()=>{
  //   setTimeout(()=>{
  //      setNum(n+1)
  //   },2000)
  // })

  const [n2,setNum2]=useState(0)

  useEffect(()=>{
    setTimeout(()=>{
       setNum2(n2+1)
    },2000)
  },[])

  const [n3,setNum3]=useState(0)

  useEffect(()=>{
    setTimeout(()=>{
      console.log(x)
       setNum3(n3+1)
    },2000)
  },[x]) // one time it get changed for x=unchanged then next time when x changed then only 

  

  return <>
  
  <h1>I've rendered {n} times![useEffect without d] </h1>
  <h1>I've rendered {n2} times![useEffect with d=[]] </h1>

  <h1>I've rendered {n3} {x}  times![useEffect with d=[x]] </h1>
  <button onClick={changeX}>change X</button>
  </>
}

export default HookTwo