import { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./todoApp.css";

const TodoApp = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginComponent />}></Route>
          <Route path="/login" element={<LoginComponent />}></Route>
          <Route path="/home" element={<WelcomeComponent />}></Route>
          <Route path="*" element={<ErrorComponent />}></Route>
        </Routes>
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
      navigate("/home");
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
  return <div>Welcome to the Todo app</div>;
};

const ErrorComponent = () => {
  return (
    <div>
      <h1>Ooops !!</h1>
      <p>Something went wrong, contact admin</p>
    </div>
  );
};

export default TodoApp;
