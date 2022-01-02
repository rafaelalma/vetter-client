import propTypes from "prop-types";
import { Link } from "react-router-dom";
import "./PetCard.scss";

export default function PetCard({ pet }) {
  const { id, name } = pet;

  return (
    <li className="PetCard">
      <Link to={`/dashboard/patients/${id}`}>
        <img src="" alt="" width="100" height="100" className="pet-card-img" />
      </Link>
      <h3>{name}</h3>
    </li>
  );
}

PetCard.propTypes = {
  patient: propTypes.shape({
    name: propTypes.string.isRequired,
  }),
};
