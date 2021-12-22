import styled from "styled-components";

export default styled.something`
${props => props.buttonType==="button_on" ?
`background-color: #7b4cd8; color: #fff; font-size: 1.25rem;` :
`background-color: #ff31ca; color: #ffe6f9; font-size: 0.95rem;`};
padding: 10px;
border: none;
border-radius: 5px;
`