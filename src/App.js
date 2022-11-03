import { useRef, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

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

  const handleDeleteBtn = (id) => {
    const newTodo = todoList.filter((item) => item.id !== id);
    setTodoList(newTodo);
  };

  const handleCheckbox = (id) => {
    setTodoList(
      todoList.map((todo) => {
        return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
      })
    );
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
