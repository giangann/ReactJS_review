import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [on, setOn] = useState(true);

  function handleIncrease() {
    setCount((count) => count + 1);
  }

  if (on) return <Counter count={count} handleIncrease={handleIncrease} />;
  else return null
}

function Counter({count,handleIncrease}) {
  useEffect(
    () => {
      console.log("Side Effect")

      return() =>{
        console.log("Clean Up")
      }
    }
  )
  return(
    <div>
      <p>{count}</p>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

export default App;
