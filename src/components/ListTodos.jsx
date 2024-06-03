import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteTodo, retrieveAllTodosForUserName } from "./api/todoService";
import { useAuth } from "./security/AuthContext";

const ListTodos = () => {
  const authContext = useAuth();
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    retrieveAllTodosForUserName(authContext.userName)
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => alert(error));
  }, []);

  const handleUpdate = (id) => {
    navigate(`/todo/${id}`);
  }

  const handleDelete = (id) => {
    deleteTodo(authContext.userName, id)
      .then((response) => {
        let tempArr = todos;
        tempArr = tempArr.filter((t) => t.id != id);
        setTodos(tempArr);
      })
      .catch((error) => console.log(error));
  };

  const createTodo = () => {
    navigate("/todo/-1")
  }

  return (
    <div className="container">
      <h1>Things you want to do</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Is done?</th>
            <th>Target Date</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.description}</td>
              <td>{todo.done.toString()}</td>
              <td>{todo.targetDate}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => handleUpdate(todo.id)}
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(todo.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button className="btn btn-success m-5" onClick={createTodo}>Create Todo</button>
      </div>
    </div>
  );
};

export default ListTodos;
