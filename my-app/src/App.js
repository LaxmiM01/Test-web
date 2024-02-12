
import './App.css';
import React,{useState} from 'react'



function App() {
  const[amount, setAmount] = useState(1)
  const increaseCountValue = () => {
    console.log("This is Increment Value")
    setAmount(amount+1)
  }

  const decreaseCountValue = () =>{
    console.log("This is Decrement Value")
    setAmount(amount-1)
  }

  return (
    <>
       <h1>{amount}</h1>
    <button onClick={increaseCountValue}>Increment</button>
    <button onClick={decreaseCountValue}>Decrement</button>

    </>
  );
}

export default App;
