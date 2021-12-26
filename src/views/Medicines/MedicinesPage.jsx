import { NavLink, Outlet } from "react-router-dom";
import "./MedicinesPage.scss";

export default function MedicinesPage() {
  return (
    <>
      <nav>
        <ul className="medicines-page-navigation">
          <li>
            <NavLink className="link-accent" to="/medicines/categories">
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink className="link-accent" to="/medicines/search">
              Search
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
