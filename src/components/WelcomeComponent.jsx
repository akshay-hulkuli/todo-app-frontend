import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { retrieveHelloWorldMessage } from "./api/helloWorldService";

const WelcomeComponent = () => {
  const { userName } = useParams();

  const callHelloWorld = () => {
    retrieveHelloWorldMessage()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Welcome to the Todo app</h1>
      <p>how are you {userName}</p>
      <p>
        Manage your todos <Link to="/todos">here</Link>
      </p>
      <div>
        <button className="btn btn-success" onClick={callHelloWorld}>
          Call hello world
        </button>
      </div>
    </div>
  );
};

export default WelcomeComponent;
