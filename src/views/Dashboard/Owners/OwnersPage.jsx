import { NavLink, Outlet } from "react-router-dom";
import "./OwnersPage.scss";

export default function OwnersPage() {
  return (
    <div className="OwnersPage">
      <NavLink
        to="/dashboard/owners/new"
        className="link-primary owners-page-new-owner-link"
      >
        New Owner
      </NavLink>
      <Outlet />
    </div>
  );
}
