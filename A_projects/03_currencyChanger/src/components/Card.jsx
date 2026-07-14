import React from 'react'

function Card() {
  return (
    <>
    
     <div id="cardContainor" className='min-h-screen overflow-auto flex justify-center items-center w-screen bg-gray-800'>


         <div id="card" className='h-80 w-175 rounded-3xl flex justify-center items-center flex-col bg-gray-700'>
             <div id="frombox" className='w-145 flex justify-center items-center h-30 bg-gray-200 rounded-2xl'>

                    <div className="textcontainer w-140 h-26 flex  p-1">
                        <div className="from flex flex-col w-70 ">

                           <label className="text-xl text-gray-400 font-medium">From</label>
                      <input 
                      type="number"
                      className='w-25 px-2 my-6 bg-amber-100 rounded-3xl'
                       />
                        </div>
                     

                         <div className="currencytype flex flex-col items-end w-70 ">

                           <label className="text-xl text-gray-400 font-medium">Currency Type</label>
                      <input 
                      type="text"
                      className='w-25  px-2 my-6 bg-amber-100 rounded-3xl'
                       />
                        </div>
                  
                     
                        
                    </div>



             </div>

              <button id="swap" className='h-10 -my-4 z-10  w-15 bg-blue-500 rounded-4xl hover:scale-105 active:scale-95 transition-all duration-300'> swap</button>

           

              <div id="tobox" className='w-145 h-30 bg-gray-200 rounded-2xl'>

                      <div className="textcontainer w-140 h-26 flex  p-1">
                        <div className="from flex flex-col w-70 p-1">

                           <label className="text-xl text-gray-400 font-medium">To</label>
                      <input 
                      type="number"
                      className='w-25 px-2 my-6 bg-amber-100 rounded-3xl'
                       />
                        </div>
                     

                         <div className="currencytype flex flex-col items-end w-70 ">

                           <label className="text-xl text-gray-400 font-medium">Currency Type</label>
                      <input 
                      type="text"
                      className='w-25  px-2 my-6 bg-amber-100 rounded-3xl'
                       />
                        </div>
                  
                     

                     
                        
                    </div>



              </div>


        </div>


     </div>
        
       
    </>
    
  )
}

export default Card



