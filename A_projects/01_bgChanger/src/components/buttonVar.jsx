import Buttonss from './colorBtn'
import {useState} from 'react'

function Bar() {

  const [col,setCol]=useState('bg-black')
  const changeCol=(newColor)=>{
    setCol(newColor)
  }


  const yel = {
    buttonText: "Yellow",
    bgColor: "bg-yellow-500" ,
     onclick: {changeCol}
  }
  const blu = {
    buttonText: "Blue",
    bgColor: "bg-blue-500",
    onclick: {changeCol}
  }
  const gre = {
    buttonText: "Green",
    bgColor: "bg-green-500",
    onclick: {changeCol}
  }
  const red = {
    buttonText: "Red",
    bgColor: "bg-red-500",
    onclick: {changeCol}
  }
  const pin = {
    buttonText: "Pink",
    bgColor: "bg-pink-500",
    onclick: {changeCol}
  }
  const org = {
    buttonText: "Orange",
    bgColor: "bg-orange-500",
    onclick: {changeCol}
  }
  const newcol={
    buttonText:"gray",
    bgColor: "bg-gray-600" ,
    onclick:{changeCol}
  }

  return <>
    <div className={`boxA min-h-screen w-screen ${col}`} flex >


      <div className="boxB bg-white h-11 w-auto flex  m-6 ">
      <Buttonss {...yel} onclick={()=>changeCol(yel.bgColor)}/>  
      <Buttonss {...blu} onclick={()=>changeCol(blu.bgColor)}/>
      <Buttonss {...gre} onclick={()=>changeCol(gre.bgColor)}/>
      <Buttonss {...red} onclick={()=>changeCol(red.bgColor)}/>
      <Buttonss {...pin} onclick={()=>changeCol(pin.bgColor)}/>
      <Buttonss {...org} onclick={()=>changeCol(org.bgColor)}/>
         <Buttonss {...newcol} onclick={()=>changeCol(newcol.bgColor)}/>

    </div>



    </div>
   
  </>
}

export default Bar