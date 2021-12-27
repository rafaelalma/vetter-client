import { Loader } from "components/loaders";
import useFetch from "hooks/useFetch.hook";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PatientDetails.scss";

export default function PatientDetails() {
  const params = useParams();

  const { get, loading } = useFetch("http://localhost:3001/");

  const [details, setDetails] = useState({});

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

  return loading ? (
    <Loader />
  ) : (
    <div className="PatientDetails">
      <h3>{name}</h3>
      <p>
        <strong>Birth date:</strong>{" "}
        <time dateTime={birth_date}>{birth_date}</time>
      </p>
      <p>
        <strong>Species:</strong> {species}
      </p>
      <p>
        <strong>Breed:</strong> {breed}
      </p>
      <p>
        <strong>Color:</strong> {color}
      </p>
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
  );
}
