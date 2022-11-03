import TodoItem from "./TodoItem";

const TodoList = ({ todoList, handleDeleteBtn, handleCheckbox }) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoItem
          id={todo.id}
          todo={todo}
          handleDeleteBtn={handleDeleteBtn}
          handleCheckbox={handleCheckbox}
        />
      ))}
    </ul>
  );
};

export default TodoList;
