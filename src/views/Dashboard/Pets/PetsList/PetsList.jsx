import { Loader } from "components/loaders";
import useFetch from "hooks/useFetch.hook";
import useFirstTimeGetSet from "hooks/useFirstTimeGetSet.hook";
import { useState } from "react";
import { SERVER } from "services/settings";
import PetCard from "./PetCard/PetCard";
import "./PetsList.scss";

export default function PetsList() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);

  const { get } = useFetch(SERVER);

  useFirstTimeGetSet(get, "pets", setPets, setLoading, "Pets");

  return loading ? (
    <Loader />
  ) : pets.length > 0 ? (
    <ul className="PetsList">
      {pets.map((pet) => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </ul>
  ) : (
    <p>No pets</p>
  );
}
