import { Button } from "components/buttons";
import { Loader } from "components/loaders";
import useFetch from "hooks/useFetch.hook";
import useFirstTimeGetSet from "hooks/useFirstTimeGetSet.hook";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./PatientDetails.scss";

export default function PatientDetails() {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const params = useParams();

  const navigate = useNavigate();

  const { get, del } = useFetch("http://localhost:3001/");

  const id = Number.parseInt(params.id, 10);

  const {
    name,
    birth_date,
    species,
    breed,
    color,
    vaccination_status,
    gender,
    spayed_or_neutered,
  } = details;

  // TODO: refactor
  const { owner_first_name, owner_last_name, owner_email, owner_phone } =
    details;

  useFirstTimeGetSet(
    get,
    `patients/${id}`,
    setDetails,
    setLoading,
    `Patient ${id} details`
  );

  const handleDeleteClick = () => {
    (async () => {
      try {
        setLoading(true);

        await del(`patients/${id}`);
        console.log(`Delete patient ${id}`);

        setLoading(false);

        navigate("/dashboard/patients");
      } catch (error) {
        setLoading(false);

        console.error(error);
      }
    })();
  };

  return loading ? (
    <Loader />
  ) : (
    <div className="PatientDetails">
      <div>
        <h3>{name}</h3>
        {birth_date && (
          <p>
            <strong>Birth date:</strong>{" "}
            <time dateTime={birth_date}>{birth_date}</time>
          </p>
        )}
        <p>
          <strong>Species:</strong> {species}
        </p>
        {breed && (
          <p>
            <strong>Breed:</strong> {breed}
          </p>
        )}
        {color && (
          <p>
            <strong>Color:</strong> {color}
          </p>
        )}
        <p>
          <strong>Vaccination Status:</strong> {vaccination_status}
        </p>
        <p>
          <strong>Gender:</strong> {gender}
        </p>
        <p>
          <strong>Spayed or Neutered:</strong> {spayed_or_neutered}
        </p>
      </div>

      <div>
        <h3>
          {owner_first_name} {owner_last_name}
        </h3>
        <p>
          <strong>Email: </strong>
          {owner_email}
        </p>
        <p>
          <strong>Phone: </strong>
          {owner_phone}
        </p>
      </div>

      <Button
        onClick={handleDeleteClick}
        disabled={loading}
        className="patient-details-delete-btn"
      >
        Delete
      </Button>
    </div>
  );
}
