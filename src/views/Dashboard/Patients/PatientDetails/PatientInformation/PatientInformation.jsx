import { Loader } from "components/loaders";
import useFetch from "hooks/useFetch.hook";
import useFirstTimeGetSet from "hooks/useFirstTimeGetSet.hook";
import { useState } from "react";
import "./PatientInformation.scss";

export default function PatientInformation({ id }) {
  const [information, setInformation] = useState({});
  const [loading, setLoading] = useState(false);

  const { get } = useFetch("http://localhost:3001/");

  useFirstTimeGetSet(
    get,
    `pets/${id}`,
    setInformation,
    setLoading,
    `Patient ${id} details`
  );

  const {
    name,
    birth_date,
    species,
    breed,
    color,
    vaccination_status,
    gender,
    spayed_or_neutered,
  } = information;

  return loading ? (
    <Loader />
  ) : (
    <div className="PatientInformation">
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
    </div>
  );
}
