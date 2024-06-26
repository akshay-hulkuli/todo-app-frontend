import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

const LoginComponent = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  const authContext = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (authContext.login(userName, password)) {
      setShowFailureMessage(false);
      navigate("/home/" + userName);
    } else {
      setShowFailureMessage(true);
    }
  };

  return (
    <div>
      <h1>Time to login</h1>
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

export default LoginComponent;
