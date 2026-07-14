function ColorBtn(props) {



  return <>
  
  
  
   <div className={`${props.bgColor} p-1.5 m-1 flex rounded-3xl`}>
      <button className="btn text-black font-semibold h-6 w-19 " onClick={props.onclick}>
        {props.buttonText}
        
      </button>
    </div>
  
  
  
  
  </>
   
  
}

export default ColorBtn