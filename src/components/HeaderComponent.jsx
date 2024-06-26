import { Link } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

const HeaderComponent = () => {
  const authContext = useAuth();
  return (
    <header className="border-bottom border-light border-5 mb-5 p-2">
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg">
            <a
              className="navbar-brand ms-2 fs-2 fw-bold text-black"
              href="https://www.in28minutes.com"
            >
              My todos
            </a>
            <div className="collapse navbar-collapse">
              {authContext.isAuthenticated && (
                <ul className="navbar-nav">
                  <li className="nav-item fs-5">
                    <Link className="nav-link" to={"/home/" + authContext.userName}>
                      Home
                    </Link>
                  </li>
                  <li className="nav-item fs-5">
                    <Link className="nav-link" to={`/todos/${authContext.userName}`}>
                      Todos
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            <ul className="navbar-nav">
              {!authContext.isAuthenticated && (
                <li className="nav-item fs-5">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              )}
              {authContext.isAuthenticated && (
                <li
                  className="nav-item fs-5"
                  onClick={() => authContext.logout()}
                >
                  <Link className="nav-link" to="/logout">
                    Logout
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
