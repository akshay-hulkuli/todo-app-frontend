import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import ErrorComponent from "./ErrorCompoenent";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import ListTodos from "./ListTodos";
import LoginComponent from "./LoginComponent";
import LogoutComponent from "./LogoutComponent";
import "./todoApp.css";
import WelcomeComponent from "./WelcomeComponent";

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

export default TodoApp;
