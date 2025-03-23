import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);

  // let counter = 15
  const addValue = () =>{
    if(counter<20){

      counter=counter+1;
     
      setCounter(counter);
    }
  }

  const removeValue = () =>{
    if(counter > 0){
      setCounter(counter-1);
    }
    else{
     
    }
  }

  return (
    <>
      
      <h1>let Count</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button><br></br>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
