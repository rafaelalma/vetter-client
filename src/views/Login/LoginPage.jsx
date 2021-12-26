import { NavLink } from "react-router-dom";
import LoginForm from "./LoginForm/LoginForm";
import "./LoginPage.scss";

export default function LoginPage() {
  return (
    <>
      <LoginForm />
      <div className="login-page-forgot-password-link">
        <NavLink className="link-accent" to="/forgot-password">
          Forgot your password?
        </NavLink>
      </div>
    </>
  );
}
