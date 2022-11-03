import { useState } from "react";

const TodoInput = ({ handleAddTodo }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTodo(value);
    setValue("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={value}
          placeholder="할 일을 입력하세요"
        />
        <button>추가</button>
      </form>
    </div>
  );
};
export default TodoInput;
