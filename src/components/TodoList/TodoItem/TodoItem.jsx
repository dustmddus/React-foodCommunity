import * as S from "./TodoItem.style.js";
const TodoItem = ({ todo, handleDeleteBtn, handleCheckbox }) => {
  return (
    <S.Li>
      <S.CheckboxInput
        type="checkbox"
        checked={todo.checked}
        onChange={() => handleCheckbox(todo.id)}
      />
      <S.Text style={{ textDecoration: todo.checked ? "line-through" : null }}>
        {todo.text}
      </S.Text>
      <S.DeleteBtn
        data-id={todo.id}
        className="delete"
        onClick={() => handleDeleteBtn(todo.id)}
      >
        삭제
      </S.DeleteBtn>
    </S.Li>
  );
};

export default TodoItem;
