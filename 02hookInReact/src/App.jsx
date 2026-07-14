import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import WhyHooks from './components/whyHooks'
import HookOne from './components/useState'
import HookTwo from './components/useEffect'

function App() {
  
  // This method well updated the color but changes not render on UI
  // let color='red'
  // const changecolor=()=>{
  //     color='Blue'
  //     console.log("red to blue")
  // }

  // so hook needed for state,lifecycle 

  //useState [current-val,function_to_change]

 
  let [color,setState]=useState('red')
  
  const changecolor=()=>{
      setState('Blue')
  }

  

  return (
    <>
     <h2>Hook Depth Understanding</h2>
     <WhyHooks/>

    <h2>My fav color is {color}</h2>
    <button onClick={changecolor}>Blue</button>

    
    <HookOne/>

    <HookTwo/>

    
    </>
  )
}

export default App
