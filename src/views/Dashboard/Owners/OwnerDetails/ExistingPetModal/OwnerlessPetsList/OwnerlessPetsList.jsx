import { Loader } from "components/loaders";
import useFetch from "hooks/useFetch.hook";
import useFirstTimeGetSet from "hooks/useFirstTimeGetSet.hook";
import { useState } from "react";
import { SERVER } from "services/settings";
import PetCard from "views/Dashboard/Pets/PetsList/PetCard/PetCard";
import "./OwnerlessPetsList.scss";

export default function OwnerlessPetsList({
  ownerId,
  setPets,
  setShowList,
}) {
  const [ownerlessPets, setOwnerlessPets] = useState([]);
  const [loading, setLoading] = useState(false);

  const { get } = useFetch(SERVER);

  useFirstTimeGetSet(
    get,
    "pets?owner_id=0",
    setOwnerlessPets,
    setLoading,
    "Ownerless pets"
  );

  return loading ? (
    <Loader />
  ) : ownerlessPets.length > 0 ? (
    <ul className="OwnerlessPetsList">
      {ownerlessPets.map((ownerlessPet) => (
        <PetCard
          key={ownerlessPet.id}
          pet={ownerlessPet}
          btnAdd
          ownerId={ownerId}
          setPets={setPets}
          setShowList={setShowList}
        />
      ))}
    </ul>
  ) : (
    <p>No ownerless pets</p>
  );
}
