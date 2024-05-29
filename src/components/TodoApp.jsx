import { useState } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
import "./todoApp.css";

const TodoApp = () => {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/home/:userName" element={<WelcomeComponent />} />
          <Route path="/todos" element={<ListTodos />} />
          <Route path="/logout" element={<LogoutComponent />} />
          <Route path="*" element={<ErrorComponent />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
};

const LoginComponent = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("on submit");
    if (userName === "Akshay" && password === "qwerty") {
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      navigate("/home/" + userName);
    } else {
      setShowSuccessMessage(false);
      setShowFailureMessage(true);
    }
  };

  return (
    <div>
      <h1>Time to login</h1>
      {showSuccessMessage && (
        <div className="login-success">Authenticaed successfully</div>
      )}
      {showFailureMessage && (
        <div className="login-failure">
          {" "}
          Authentication failed, please check crendentails
        </div>
      )}
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-field">
          <label style={{ margin: "10px", padding: "10px" }}>UserName :</label>{" "}
          <input
            style={{ margin: "10px", padding: "10px" }}
            placeholder="Enter User name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div>
          <label style={{ margin: "10px", padding: "10px" }}>Password :</label>{" "}
          <input
            style={{ margin: "10px", padding: "10px" }}
            placeholder="Enter your password"
            value={password}
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="submit-button-ctn">
          <input
            className="submit-button"
            type={"submit"}
            placeholder="Submit"
          />
        </div>
      </form>
    </div>
  );
};

const WelcomeComponent = () => {
  const { userName } = useParams();

  return (
    <div>
      <h1>Welcome to the Todo app</h1>
      <p>how are you {userName}</p>
      <p>
        Manage your todos <Link to="/todos">here</Link>
      </p>
    </div>
  );
};

const ErrorComponent = () => {
  return (
    <div>
      <h1>Ooops !!</h1>
      <p>Something went wrong, contact admin</p>
    </div>
  );
};

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

const HeaderComponent = () => {
  return (
    <header className="border-bottom border-light border-5 mb-5 p-2">
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg">
            <a
              className="navbar-brand ms-2 fs-2 fw-bold text-black"
              href="https://www.in28minutes.com"
            >
              in28minutes
            </a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item fs-5">
                  <Link className="nav-link" to="/welcome/in28minutes">
                    Home
                  </Link>
                </li>
                <li className="nav-item fs-5">
                  <Link className="nav-link" to="/todos">
                    Todos
                  </Link>
                </li>
              </ul>
            </div>
            <ul className="navbar-nav">
              <li className="nav-item fs-5">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item fs-5">
                <Link className="nav-link" to="/logout">
                  Logout
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="container">Your Footer</div>
    </footer>
  );
};

const LogoutComponent = () => {
  return <div>Your are logged out!</div>;
};

export default TodoApp;
