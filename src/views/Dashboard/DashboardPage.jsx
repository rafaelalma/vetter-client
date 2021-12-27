import { NavLink, Outlet } from "react-router-dom";
import "./DashboardPage.scss";

export default function DashboardPage() {
  return (
    <>
      <nav>
        <ul className="dashboard-page-navigation">
          <li>
            <h2>
              <NavLink className="link-accent" to="/dashboard/patients">
                Patients
              </NavLink>
            </h2>
          </li>
          <li>
            <h2>
              <NavLink className="link-accent" to="/dashboard/owners">
                Owners
              </NavLink>
            </h2>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
