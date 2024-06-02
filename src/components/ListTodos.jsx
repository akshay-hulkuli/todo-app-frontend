const ListTodos = () => {
  const today = new Date();
  const targetData = new Date(
    today.getFullYear() + 12,
    today.getMonth(),
    today.getDay()
  );
  const todos = [
    { id: 1, description: "Learn AWS", done: false, targetData: targetData },
    { id: 2, description: "Learn GCP", done: false, targetData: targetData },
    { id: 3, description: "Learn AZURE", done: false, targetData: targetData },
  ];
  return (
    <div className="container">
      <h1>Things you want to do</h1>
      <table className="table">
        <thead>
          <tr>
            <td>Id</td>
            <td>Description</td>
            <td>Is done?</td>
            <td>Target Date</td>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.id}</td>
              <td>{todo.description}</td>
              <td>{todo.done.toString()}</td>
              <td>{todo.targetData.toDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTodos;
