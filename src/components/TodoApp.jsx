import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ErrorComponent from "./ErrorCompoenent";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import ListTodos from "./ListTodos";
import LoginComponent from "./LoginComponent";
import LogoutComponent from "./LogoutComponent";
import AuthProvider, { useAuth } from "./security/AuthContext";
import "./todoApp.css";
import TodoComponent from "./TodoComponent";
import WelcomeComponent from "./WelcomeComponent";

const AuthenticatedRoute = ({ children }) => {
  const authContext = useAuth();
  if (authContext.isAuthenticated) {
    return { ...children };
  } else {
    return <Navigate to="/" />;
  }
};

const TodoApp = () => {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<LoginComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route
              path="/home/:userName"
              element={<AuthenticatedRoute children={<WelcomeComponent />} />}
            />
            <Route
              path="/todos/:userName"
              element={<AuthenticatedRoute children={<ListTodos />} />}
            />
             <Route
              path="/todo/:id"
              element={<AuthenticatedRoute children={<TodoComponent />} />}
            />
            <Route
              path="/logout"
              element={<AuthenticatedRoute children={<LogoutComponent />} />}
            />
            <Route
              path="*"
              element={<AuthenticatedRoute children={<ErrorComponent />} />}
            />
          </Routes>
          <FooterComponent />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default TodoApp;
