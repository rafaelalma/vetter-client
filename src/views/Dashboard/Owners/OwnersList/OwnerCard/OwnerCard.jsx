import { Button } from "components/buttons";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import "./OwnerCard.scss";

export default function OwnerCard({ owner, btnAdd, onAddOwnerClick }) {
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
      <div className="owner-card-content">
        <h3>
          {first_name} {last_name}
        </h3>
        {btnAdd && (
          <Button
            onClick={() => onAddOwnerClick(id)}
            outline
            className="btn-small"
          >
            Add Owner
          </Button>
        )}
      </div>
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
