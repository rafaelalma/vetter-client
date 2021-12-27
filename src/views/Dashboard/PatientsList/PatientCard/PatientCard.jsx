import propTypes from "prop-types";
import "./PatientCard.scss";

export default function PatientCard({ patient }) {
  const { name, species, breed } = patient;

  return (
    <li className="PatientCard">
      <h3>{name}</h3>
      <p>{species}</p>
      <p>{breed}</p>
    </li>
  );
}

PatientCard.propTypes = {
  patient: propTypes.shape({
    name: propTypes.string.isRequired,
    species: propTypes.string.isRequired,
    breed: propTypes.string.isRequired,
  }),
};
