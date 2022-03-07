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
    </>
  );

  return (
    <header className="Header">
      <div>
        <h1>
          <NavLink to="/">Vetter</NavLink>
        </h1>
        <nav>
          <ul className="header-navigation">
            {context.authentication ? loggedInLinks : loggedOutLinks}
          </ul>
        </nav>
      </div>
      {context.authentication && (
        <Button className="btn-accent btn-small" onClick={handleLogoutClick}>
          X
        </Button>
      )}
    </header>
  );
}
