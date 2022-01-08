import { Loader } from "components/loaders";
import useFetch from "hooks/useFetch.hook";
import useFirstTimeGetSet from "hooks/useFirstTimeGetSet.hook";
import propTypes from "prop-types";
import { useState } from "react";
import { SERVER } from "services/settings";
import PetCard from "./PetCard/PetCard";
import "./PetsList.scss";

export default function PetsList({ ownerId, pets, setPets }) {
  const [loading, setLoading] = useState(false);

  const { get } = useFetch(SERVER);

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
  pets: propTypes.array.isRequired,
  setPets: propTypes.func.isRequired,
};
