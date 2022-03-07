import { NavLink, Outlet } from "react-router-dom";
import "./PetsPage.scss";

export default function PetsPage() {
  return (
    <div className="PetsPage">
      <NavLink
        to="/dashboard/pets/new"
        className="link-primary pets-page-new-pet-link"
      >
        New Pet
      </NavLink>
      <Outlet />
    </div>
  );
}
