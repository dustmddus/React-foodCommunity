const TodoList = ({ todoList }) => {
  return <ul>{todoList.map(({ todo }) => console.log(todo))}</ul>;
};

export default TodoList;
