import { NavLink } from "react-router-dom";
import LoginForm from "./LoginForm/LoginForm";
import "./LoginPage.scss";

export default function LoginPage() {
  return (
    <>
      <LoginForm />
      {/* TODO: component */}
      <div className="ForgotPasswordLink">
        <NavLink className="link-accent" to="/forgot-password">
          Forgot your password?
        </NavLink>
      </div>
    </>
  );
}
