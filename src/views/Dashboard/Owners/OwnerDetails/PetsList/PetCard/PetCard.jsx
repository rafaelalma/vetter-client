import propTypes from "prop-types";
import "./PetCard.scss";

export default function PetCard({ pet }) {
  const { name } = pet;

  return (
    <li className="PetCard">
      {/* // TODO: link to patient with pet id */}
      <img src="" alt="" width="100" height="100" className="pet-card-img" />
      <h3>{name}</h3>
    </li>
  );
}

PetCard.propTypes = {
  patient: propTypes.shape({
    name: propTypes.string.isRequired,
  }),
};
