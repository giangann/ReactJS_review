import Checkbox from "antd/lib/checkbox/Checkbox";
import { useContext } from "react";
import {Title} from './App'

function TodoList({ item, handleCheck }) {
    const title = useContext(Title)
    console.log(title)
  return (
    <div>
        <h1>{title}</h1>
      <div>
        {item.work}
        <Checkbox
          onChange={(e) => {
            handleCheck(item.id, e.target.checked);
          }}
          defaultChecked={item.isCompleted}
        ></Checkbox>
      </div>
    </div>
  );
}

export default TodoList;
