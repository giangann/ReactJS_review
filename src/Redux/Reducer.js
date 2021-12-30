import { useSelector } from "react-redux";

// reducer:
export function Counter(state ={count:0, value: ''}, action) {
  // const tempCount = useSelector(state => state.count)
  // const value = useSelector(state => state.value)
  switch (action.type) {
    case "INCREMENT":
      const tempValue = action.payload.value
      return {
        ...state,
        count: state.count + parseInt(tempValue),
        value: ''
      }
    case "DECREMENT":

      return {
        ...state,
        count : state.count-parseInt(action.payload.value),
        value:''
      }
    case "CHANGE_VALUE":
      return {
        ...state,
        value: action.payload.newvalue
      }
    default:
      return state;
  }
}
