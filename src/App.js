import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Store from './Redux/Store'
import {Increment, Decrement, ChangeInputValue} from './Redux/ActionCreator'

function App() {
  const value = useSelector(state => state.value)
  const countDisplay = useSelector(state=>state.count)

  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(Increment(value));
  };
  const handleSub = () =>{
    dispatch(Decrement(value))
  }
  const handleChange = (e) =>{
    e.preventDefault()
    dispatch(ChangeInputValue(e.target.value))
  }

  console.log(Store.getState())
 
  useSelector(state => state)

  return(
    <div>
      {countDisplay}
      <button onClick={handleAdd}>Increase</button>
      <button onClick={handleSub}>Decrease</button>
      <input onChange={handleChange} value={value}></input>
      
    </div>
  )
}

export default App;
