import { useState } from 'react'


function App() {
   

  const [length,setLength] = useState(8) //8 by default

  const [allowNumber,setAllowNumber] = useState(false)
  const [allowChar,setAllowChar] = useState(false)

  const [password,setPassword] = useState('')

  const generatePassword = () => {
    //  Start with just letters
    let stringForPassword = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    
    //  Add numbers/chars to the POOL if checked (OUTSIDE the loop!)
    if (allowNumber) {
      const numbersForPassword='0123456789'
      stringForPassword += numbersForPassword;
    }
    if (allowChar) {
     const charForPassword='!@#$%^&*(){}[]'
      stringForPassword += charForPassword;
    }

    let passwordString = '';
    for (let i = 0; i < length; i++) {
      
      let randomChar = stringForPassword[Math.floor(Math.random() * stringForPassword.length)];
      
      
      passwordString += randomChar; 
    }

    
    setPassword(passwordString);
  }

  //forcopying the parword
  const [copy,setCopy] = useState(false)
  
  const copyPassword=()=>{
    if(password!=''){
    window.navigator.clipboard.writeText(password)
    setCopy(true)
  }
    setTimeout(()=>{
      setCopy(false)
    },2000)

  }

const [showStrength, setShowStrength] = useState(false)

const getStrengthColor = () => {
  if (password === '') return 'bg-gray-500';
  
  const isLong = length >= 12;
  
  if (isLong && allowNumber && allowChar) {
    return 'bg-green-500';
  } else if (length >= 8 || allowNumber || allowChar) {
    return 'bg-yellow-500';
  } else {
    return 'bg-red-500';
  }
}
  
  

  return (
    <>
       <div className='min-h-screen w-screen bg-gradient-to-br from-stone-950 via-amber-950 to-stone-950 flex flex-col justify-center items-center p-4 relative overflow-hidden'>
         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl pointer-events-none"></div>
         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl pointer-events-none"></div>
         <div className='ContentBox rounded-3xl border border-amber-400/20 h-50 w-2xl bg-amber-900/40 backdrop-blur-xl'>

        
            
           <div className='h-25 w-2xl rounded-3xl flex my-10 flex-col justify-center gap-5 items-center'>
            <h1 className='font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400'>
             Password Generator
            </h1>
            <div className='space-x-3.5'>
                  <input id="password" value={password} className='w-80  bg-amber-700 rounded-3xl border-2 border-amber-600 px-1 h-8 font-mono tracking-widest'type="text"  name="password" placeholder="Password"  readOnly />
                  <button onClick={copyPassword}  className='h-8 w-18 rounded-3xl text-white bg-blue-700 hover:scale-102 active:scale-98 transition-all duration-300' >{copy ? "Copied!" : "Copy"}</button>
                   <button 
  onClick={() => setShowStrength(!showStrength)}
  className="relative group"
>
  {/* Small indicator dot */}
  <div className={`w-3 h-3 rounded-full ${getStrengthColor()} transition-all duration-300 ${showStrength ? 'scale-150' : 'scale-100'}`}></div>
  
  {/* Tooltip label (appears on hover) */}
  {showStrength && password && (
    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
      {length >= 12 && allowNumber && allowChar ? 'Strong' : length >= 8 || allowNumber || allowChar ? 'Good' : 'Weak'}
    </div>
  )}
</button>
            </div>

           
              
            <div >
 
                 
                {/* for checking  */}
                  <div className='flex flex-row'>

                     <div id="length_selecting ">
                    
                      <input 
                 type="range" 
         id="length" 
         name="length" 
         min="0" 
         max="45" 
         step="1"
         value={length}
         onChange={ (e)=>{ setLength(Number(e.target.value))}}
         className="w-20 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" 
                 /> 
                <label htmlFor="length" className="whitespace-nowrap mx-1 font-medium text-amber-100">
                       length <input type="number" value={length} readOnly className='w-8'  />
                </label>
              
                    
                    </div> 

                     <div id="number checking" >

                    <input type="checkbox" 
                     id="Number"
                     className='mx-5'
                     checked={allowNumber}
                     onChange={()=>setAllowNumber(prev=>!prev)}
                    />

                   <label htmlFor="Number" className="whitespace-nowrap mx-1 font-medium text-amber-100">
                       Number
                  </label>



                   </div>
                 
                    
                  <div id="Char checking" >

                    <input type="checkbox" 
                     id="Char"
                     className='mx-5'
                     checked={allowChar}
                     onChange={()=>setAllowChar(prev=>!prev)}
                    />

                   <label htmlFor="Char" className="whitespace-nowrap mx-1 font-medium text-amber-100">
                       Symbol
                  </label>



                   </div>



                  </div>
                  



            </div>



           </div>

         </div>

         <div>
           
             <button onClick={generatePassword} className='bg-blue-700 text-white my-2 py-2 px-4 rounded-3xl border-4 border-blue-800 hover:scale-105 active:scale-95 transition-all duration-300' 
             >
              Click To Generate</button>

         </div>
        
        
       </div>
    </>
  )
}

export default App
