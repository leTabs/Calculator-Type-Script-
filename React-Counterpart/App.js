import React, {useState} from 'react';
// import quiz from './quizContent';
function App(){
  let equation = ''
  const [output, setOutput] = useState("")



  const HandleClickEquation= (event)=>{
    setOutput(output+event.target.value )
  }

  return (
    <div className='simpleCalc'>
      <input value={output} readOnly type="text" placeholder='0' className='input'/>
      <div className='buttons'>
        <button className='' onClick={()=>{
          setOutput('')
        }}>C</button>
        <button value="(" onClick={HandleClickEquation}>(</button>
        <button value=")" onClick={HandleClickEquation}>)</button>
        <button value="'" onClick={() =>{
          setOutput(String(output).slice(0, output.length -1))
        }}>Del</button> 
        <button value="7" onClick={HandleClickEquation}>7</button>
        <button value="8" onClick={HandleClickEquation}>8</button>
        <button value="9" onClick={HandleClickEquation}>9</button>
        <button value="/" onClick={HandleClickEquation}>/</button> 
        <button value="4" onClick={HandleClickEquation}>4</button>
        <button value="5" onClick={HandleClickEquation}>5</button>
        <button value="6" onClick={HandleClickEquation}>6</button>
        <button value="*"onClick={HandleClickEquation}>x</button>
        <button value="1" onClick={HandleClickEquation}>1</button>
        <button value="2" onClick={HandleClickEquation}>2</button>
        <button value="3" onClick={HandleClickEquation}>3</button>
        <button value="-" onClick={HandleClickEquation}>-</button> 
        <button value="0" onClick={HandleClickEquation}>0</button>
        <button value="."onClick={HandleClickEquation}>.</button>
        <button value="" onClick={()=>{setOutput(Math.sqrt(output))}}>√x</button>
        <button value="+" onClick={HandleClickEquation}>+</button> 
        <button value="" onClick={()=>{setOutput(eval(output) * 0.1)}}>1/x</button>
        <button value="" onClick={()=>{setOutput(eval(output)** 2)}}>x²</button>
        <button className='result' onClick={()=>{
                    if(output[0] === '0'){
                      try{
                      setOutput(eval((output.slice(1,))))
                      }catch(error){
                        alert('Please use mathmatical operations')
                        setOutput('')
                      }
                      return
                    }
                    try{
          setOutput(
          eval(output))}catch(error){
            alert('Please use mathmatical operations')
            setOutput('')
          }} }>=</button>
      </div>
    </div>
  )
}

export default App
