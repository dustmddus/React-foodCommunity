import { useRef, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { getItem, setItem } from "./utils/storage";

function App() {
  const nextId = useRef(0);
  const [todoList, setTodoList] = useState(getItem("todo", []));
  const handleAddTodo = (value) => {
    const todo = {
      id: nextId.current,
      text: value,
      checked: false,
    };
    const addTodo = todoList.concat(todo);
    setItem("todo", addTodo);
    setTodoList(addTodo);
    nextId.current++;
  };

  const handleDeleteBtn = (id) => {
    const newTodo = todoList.filter((item) => item.id !== id);
    setItem("todo", newTodo);
    setTodoList(newTodo);
  };

  const handleCheckbox = (id) => {
    const checkTodo = todoList.map((todo) => {
      return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
    });
    setItem("todo", checkTodo);
    setTodoList(checkTodo);
  };

  return (
    <div className="App">
      <TodoInput handleAddTodo={handleAddTodo} />
      <TodoList
        todoList={todoList}
        handleDeleteBtn={handleDeleteBtn}
        handleCheckbox={handleCheckbox}
      />
    </div>
  );
}

export default App;
