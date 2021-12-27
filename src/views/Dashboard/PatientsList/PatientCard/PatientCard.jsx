import propTypes from "prop-types";
import { Link } from "react-router-dom";
import "./PatientCard.scss";

export default function PatientCard({ patient }) {
  const { id, name, species, breed } = patient;

  return (
    <li className="PatientCard">
      <Link to={`/dashboard/patients/${id}`}>
        <img
          src=""
          alt=""
          width="100"
          height="100"
          className="patient-card-img"
        />
      </Link>
      <div>
        <h3>{name}</h3>
        <p>{species}</p>
        <p>{breed}</p>
      </div>
    </li>
  );
}

PatientCard.propTypes = {
  patient: propTypes.shape({
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    species: propTypes.string.isRequired,
    breed: propTypes.string.isRequired,
  }),
};
