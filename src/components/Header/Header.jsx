import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthenticationContext } from "../../context/authentication/AuthenticationContext";
import "./Header.scss";

export default function Header() {
  const context = useContext(AuthenticationContext);

  const loggedOutLinks = (
    <>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/sign-up">Sign Up</NavLink>
      </li>
    </>
  );

  const loggedInLinks = (
    <>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/medicines">Medicines</NavLink>
      </li>
    </>
  );

  return (
    <header className="Header">
      <nav>
        <ul className="header-navigation">
          <li>
            <NavLink to="/">
              <h1 className="header-title">Vetter</h1>
            </NavLink>
          </li>
          {context.authentication ? loggedInLinks : loggedOutLinks}
        </ul>
      </nav>
    </header>
  );
}
