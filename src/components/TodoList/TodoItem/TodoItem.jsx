const TodoItem = ({ todo, handleDeleteBtn, handleCheckbox }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.checked}
        onChange={() => handleCheckbox(todo.id)}
      ></input>
      <span style={{ textDecoration: todo.checked ? "line-through" : null }}>
        {todo.text}
      </span>
      <button
        data-id={todo.id}
        className="delete"
        onClick={() => handleDeleteBtn(todo.id)}
      >
        삭제
      </button>
    </li>
  );
};

export default TodoItem;
