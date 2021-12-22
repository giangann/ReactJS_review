import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";


function App() {
  const [on,setOn] = useState(true)

  const handleClick = (e)=>{
    setOn(on => !on)
  }

  const handleUI = [
    on ? 'button_on' : 'button_off'
  ].toString()

  return(
    <div >
      <button onClick={handleClick} className={handleUI} >
      {on?"ON":"OFF"}
    </button>
    </div>
  )
}

export default App;
