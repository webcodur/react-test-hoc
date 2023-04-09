import withHOC from "./withHoc";

function UserList({ data }) {
  let renderUsers = data.map((user) => {
    return (
      <div key={user.id}>
        <p>
          <strong>{user.name}</strong>
        </p>
      </div>
    );
  });

  return (
    <div>
      <div>{renderUsers}</div>
    </div>
  );
}

export default withHOC(UserList, "users");
