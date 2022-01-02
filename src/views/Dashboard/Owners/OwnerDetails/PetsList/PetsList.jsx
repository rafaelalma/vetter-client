import { Loader } from "components/loaders";
import useFetch from "hooks/useFetch.hook";
import useFirstTimeGetSet from "hooks/useFirstTimeGetSet.hook";
import propTypes from "prop-types";
import { useState } from "react";
import PetCard from "./PetCard/PetCard";
import "./PetsList.scss";

export default function PetsList({ ownerId }) {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);

  const { get } = useFetch("http://localhost:3001/");

  useFirstTimeGetSet(
    get,
    `pets?owner_id=${ownerId}`,
    setPets,
    setLoading,
    `Owner ${ownerId} pets`
  );

  return loading ? (
    <Loader />
  ) : (
    <ul className="PetsList">
      {pets.map((pet) => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </ul>
  );
}

PetsList.propTypes = {
  ownerId: propTypes.number.isRequired,
};
