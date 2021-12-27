import { Button } from "components/buttons";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import "./PatientCard.scss";

export default function PatientCard({ patient, onDeleteClick, loading }) {
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
      <Button
        outline
        onClick={() => onDeleteClick(id)}
        disabled={loading}
        className="patient-card-delete-btn"
      >
        Delete
      </Button>
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
  onDeleteClick: propTypes.func.isRequired,
  loading: propTypes.bool.isRequired,
};
