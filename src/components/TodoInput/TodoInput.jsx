import { useState } from "react";
import * as S from "./TodoInput.style.js";

const TodoInput = ({ handleAddTodo }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.length > 0) {
      handleAddTodo(value);
      setValue("");
    }
  };
  return (
    <S.Container>
      <S.Title>TodoList✏️</S.Title>
      <form onSubmit={handleSubmit}>
        <S.Input
          onChange={handleChange}
          value={value}
          placeholder="할 일을 입력하세요"
        />
        <S.SubmitBtn>추가</S.SubmitBtn>
      </form>
    </S.Container>
  );
};
export default TodoInput;
