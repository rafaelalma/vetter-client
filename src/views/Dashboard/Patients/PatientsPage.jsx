import { NavLink, Outlet } from "react-router-dom";
import "./PatientsPage.scss";

export default function PatientsPage() {
  return (
    <>
      <NavLink to="new" className="link-primary patients-page-new-patient-link">
        New Patient
      </NavLink>
      <Outlet />
    </>
  );
}
