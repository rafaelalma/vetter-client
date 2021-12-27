import { Button } from "components/buttons";
import { Loader } from "components/loaders";
import useFetch from "hooks/useFetch.hook";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./PatientDetails.scss";

export default function PatientDetails() {
  const params = useParams();

  const { get, del, loading } = useFetch("http://localhost:3001/");

  const [details, setDetails] = useState({});

  const navigate = useNavigate();

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

  useEffect(() => {
    (async () => {
      try {
        const data = await get(`patients/${id}`);
        console.log(`Patient ${id} details`, data);

        setDetails(data);
      } catch (error) {
        console.error(error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDeleteClick = () => {
    (async () => {
      try {
        await del(`patients/${id}`);
        console.log(`Delete patient ${id}`);

        navigate("/dashboard/patients");
      } catch (error) {
        console.error(error);
      }
    })();
  };

  return loading ? (
    <Loader />
  ) : (
    <div className="PatientDetails">
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
      <p>
        <strong>Breed:</strong> {breed}
      </p>
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
