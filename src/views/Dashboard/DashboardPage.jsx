import { NavLink, Outlet } from "react-router-dom";
import "./DashboardPage.scss";

export default function DashboardPage() {
  return (
    <>
      <nav>
        <ul className="dashboard-page-navigation">
          <li>
            <NavLink className="link-accent" to="/dashboard/patients">
              Patients
            </NavLink>
          </li>
          <li>
            <NavLink className="link-accent" to="/dashboard/saved-medicines">
              Saved Medicines
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
