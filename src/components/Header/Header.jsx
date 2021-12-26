import { Button } from "components/buttons";
import { AuthenticationContext } from "context/authentication/AuthenticationContext";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  const context = useContext(AuthenticationContext);

  const navigate = useNavigate();

  const handleLogoutClick = () => {
    context.logout();

    navigate("/");
  };

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
      <Button className="btn-accent btn-small" onClick={handleLogoutClick}>
        X
      </Button>
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
