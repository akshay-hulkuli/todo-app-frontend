import { Link, useParams } from "react-router-dom";

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

export default WelcomeComponent;
