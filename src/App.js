import "./App.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import { DatePicker, Space } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import _, { values } from "lodash";
import Checkbox from "antd/lib/checkbox/Checkbox";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./TodoList";
import context from "react-bootstrap/esm/AccordionContext";

export const Title = React.createContext();

function App() {
  const title = "Todo App";
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      work: "Brush Teeth",
      deadline: "2021-12-18",
      isCompleted: true,
    },
    {
      id: uuidv4(),
      work: "Mission 1",
      deadline: "2021-12-17",
      isCompleted: false,
    },
    {
      id: uuidv4(),
      work: "Mission 2",
      deadline: "2021-12-21",
      isCompleted: false,
    },
    {
      id: uuidv4(),
      work: "Mission 3",
      deadline: "2021-12-21",
      isCompleted: false,
    },
  ]);
  //handle when user tick the checkbox

  const changeStatus = (id, values) => {
    const tempTodos = todos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            isCompleted: values,
          }
        : todo
    );
    setTodos(tempTodos);
  };

  console.log(todos);

  const partition = _.partition(todos, "isCompleted");

  const taskCompleted = partition[0];
  const taskNotCompleted = partition[1];

  return (
    <div>
      <Title.Provider value={title}>
        <div>
          <h1>Task Completed</h1>
          {taskCompleted.map((item) => (
            <TodoList key={item.id} item={item} handleCheck={changeStatus} />
          ))}
        </div>

        <div>
          <h1>Task Not Completed</h1>
          {taskNotCompleted.map((item) => (
            <TodoList key={item.id} item={item} handleCheck={changeStatus} />
          ))}
        </div>
      </Title.Provider>
    </div>
  );
}

export default App;
