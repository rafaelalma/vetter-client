import { Button } from "components/buttons";
import useFetch from "hooks/useFetch.hook";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { SERVER } from "services/settings";
import "./PetCard.scss";

export default function PetCard({
  pet,
  btnAdd,
  ownerId,
  setPets,
  setShowList,
}) {
  const { id, name } = pet;

  const { patch } = useFetch(SERVER);

  const handleAddPetClick = () => {
    (async () => {
      try {
        const data = await patch(`pets/${id}`, { owner_id: ownerId });
        console.log(`Patch pet ${id} owner`, data);

        setPets((pets) => [...pets, data]);
        setShowList(false);
      } catch (error) {
        console.error(error);
      }
    })();
  };

  return (
    <li className="PetCard">
      <Link to={`/dashboard/pets/${id}`}>
        <img
          src=""
          alt=""
          width="100"
          height="100"
          className="pet-card-img"
        />
      </Link>
      <div className="pet-card-content">
        <h3>{name}</h3>
        {btnAdd && (
          <Button onClick={handleAddPetClick} outline className="btn-small">
            Add Pet
          </Button>
        )}
      </div>
    </li>
  );
}

PetCard.propTypes = {
  pet: propTypes.shape({
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
  }),
};
