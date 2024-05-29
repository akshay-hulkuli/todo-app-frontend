import { useState } from "react";
import "./todoApp.css";

const TodoApp = () => {
  return (
    <div>
      <LoginComponent />
    </div>
  );
};

const LoginComponent = () => {
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
    } else {
      setShowSuccessMessage(false);
      setShowFailureMessage(true);
    }
  };

  return (
    <div>
      <LoginSuccessMessage showSuccessMessage={showSuccessMessage} />
      <LoginFailureMessage showFailureMessage={showFailureMessage} />
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

const LoginSuccessMessage = (props) => {
  if (props.showSuccessMessage)
    return <div className="login-success">Authenticaed successfully</div>;
  return <></>;
};

const LoginFailureMessage = (props) => {
  if (props.showFailureMessage)
    return (
      <div className="login-failure">
        Authentication failed, please check crendentails
      </div>
    );
  return <></>;
};

const WelcomeComponent = () => {
  return <div>Welcome to the Todo app</div>;
};

export default TodoApp;
