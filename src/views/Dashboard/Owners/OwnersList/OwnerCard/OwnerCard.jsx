import propTypes from "prop-types";
import { Link } from "react-router-dom";
import "./OwnerCard.scss";

export default function OwnerCard({ owner }) {
  const { id, first_name, last_name } = owner;

  return (
    <li className="OwnerCard">
      <Link to={`/dashboard/owners/${id}`}>
        <img
          src=""
          alt=""
          width="100"
          height="100"
          className="owner-card-img"
        />
      </Link>
      <h3>
        {first_name} {last_name}
      </h3>
    </li>
  );
}

OwnerCard.propTypes = {
  owner: propTypes.shape({
    id: propTypes.number.isRequired,
    first_name: propTypes.string.isRequired,
    last_name: propTypes.string.isRequired,
  }),
};
