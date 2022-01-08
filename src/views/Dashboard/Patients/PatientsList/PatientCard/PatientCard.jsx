import { Button } from "components/buttons";
import useFetch from "hooks/useFetch.hook";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { SERVER } from "services/settings";
import "./PatientCard.scss";

export default function PatientCard({
  patient,
  btnAdd,
  ownerId,
  setPets,
  setShowList,
}) {
  const { id, name } = patient;

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
      <div className="patient-card-content">
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

PatientCard.propTypes = {
  patient: propTypes.shape({
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
  }),
};
