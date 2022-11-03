import { useRef, useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput.jsx";
import TodoList from "./components/TodoList.jsx";
function App() {
  const nextId = useRef(0);
  const [todoList, setTodoList] = useState([]);
  const handleAddTodo = (value) => {
    const todo = {
      id: nextId.current,
      text: value,
      checked: false,
    };
    setTodoList(todoList.concat(todo));
    nextId.current++;
  };
  return (
    <div className="App">
      <TodoInput handleAddTodo={handleAddTodo} />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
