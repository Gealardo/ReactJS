import { useState , useEffect} from "react";

function HookOne(){

  // const [name,setName]=useState('Gealardo')
  // const [state,setState]=useState('uttar pradesh')
  // const [country,setCountry]=useState('India')

  const [intro,setIntro]=useState({
     
    name:'Gealardo',
    state:'Uttar Pradesh',
    country:'India',

  });

  // to update name 

  const chnagename=()=>{
    // setIntro({name:'AYUN'})  other variable disappear
    // store other as same //data have ..name/state/country
    setIntro((data)=>{
       return {...data, name:'AYUN'} // ... contains rest things
    })
  }

 let x=5;
 const [count,setCount]=useState(x)
//for counting how many times count get changed
 const[renderCount,setRenderCount]=useState(0)
 useEffect(function(){
  setRenderCount(prev=>prev+1)
 },[count])

 const incCount=()=>{
  if(count >=20) return;
   setCount(count+1)
 } 

 const decCount=()=>{
  if(count<=0) return;
   setCount(count-1)
 } 

  return <>
    
  <h2>My name is {intro.name} and I live in {intro.state}</h2>
  <h3>And working in {intro.country}</h3>
  <button onClick={chnagename}>Ayun</button>

  <h2>Count : {count}</h2>
  <button onClick={incCount}>Increase</button>
  <button onClick={decCount}>Decrease</button>
   <button>Value Changed count: {renderCount}</button>
  
  </>
}

export default  HookOne;