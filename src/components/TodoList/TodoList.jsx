import TodoItem from "./TodoItem";
import * as S from "./TodoList.style.js";

const TodoList = ({ todoList, handleDeleteBtn, handleCheckbox }) => {
  return (
    <S.List>
      {todoList.map((todo) => (
        <TodoItem
          id={todo.id}
          todo={todo}
          handleDeleteBtn={handleDeleteBtn}
          handleCheckbox={handleCheckbox}
        />
      ))}
    </S.List>
  );
};

export default TodoList;
