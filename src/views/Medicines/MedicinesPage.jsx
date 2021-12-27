import { NavLink, Outlet } from "react-router-dom";
import "./MedicinesPage.scss";

export default function MedicinesPage() {
  return (
    <>
      <nav>
        <ul className="medicines-page-navigation">
          <li>
            <h2>
              <NavLink className="link-accent" end to="/medicines">
                Latest
              </NavLink>
            </h2>
          </li>
          <li>
            <h2>
              <NavLink className="link-accent" to="/medicines/saved">
                Saved
              </NavLink>
            </h2>
          </li>
          <li>
            <h2>
              <NavLink className="link-accent" to="/medicines/categories">
                Categories
              </NavLink>
            </h2>
          </li>
          <li>
            <h2>
              <NavLink className="link-accent" to="/medicines/search">
                Search
              </NavLink>
            </h2>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
