import "./App.css";
import {  useState } from "react";
import styled, { css } from 'styled-components'
// import StyledButton from "./style.js";

function App() {
  const [on,setOn] = useState(true)

  const handleClick = (e)=>{
    setOn(on => !on)
  }

  // var handleUI = require('classnames');
  // handleUI=handleUI('style',(on)?'button_on':'button_off')

  const StyledButton = styled.button`
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0.5em 1em;
    padding: 0.25em 1em;
    background-color: ${props => props.primary === true?"green":"red"}
  `;
  const BigButton = styled(StyledButton)`
    width: 300px;
    height: 200px;
    background-color: !(background-color)
  `
  
  return(
    <div >
      <StyledButton primary = {on} onClick={handleClick}>This is button</StyledButton>
      <BigButton primary = {on} onClick={handleClick}>BigButton</BigButton>
    </div>
  )
}

export default App;
