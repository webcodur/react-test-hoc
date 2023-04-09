import withHOC from "./withHoc";

function TodoLIst({ data }) {
  let renderTodos = data.map((todo) => {
    return (
      <div key={todo.id}>
        <p>
          <strong>{todo.title}</strong>
        </p>
      </div>
    );
  });

  return (
    <div>
      <div>{renderTodos}</div>
    </div>
  );
}

export default withHOC(TodoLIst, "todos");
