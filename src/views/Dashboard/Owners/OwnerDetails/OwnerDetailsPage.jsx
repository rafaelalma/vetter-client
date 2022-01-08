import { Button } from "components/buttons";
import useFetch from "hooks/useFetch.hook";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SERVER } from "services/settings";
import ExistingPetModal from "./ExistingPetModal/ExistingPetModal";
import NewPetModal from "./NewPetModal/NewPetModal";
import OwnerContact from "./OwnerContact/OwnerContact";
import "./OwnerDetailsPage.scss";
import PetsList from "./PetsList/PetsList";

export default function OwnerDetailsPage() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);

  const params = useParams();

  const { del, get, patch } = useFetch(SERVER);

  const navigate = useNavigate();

  const id = Number.parseInt(params.id, 10);

  const handleDeleteClick = () => {
    (async () => {
      try {
        setLoading(true);

        await del(`owners/${id}`);
        console.log(`Delete owner ${id}`);

        // Reset deleted owner pets owner
        // TODO: check atomicity
        const pets = await get(`pets?owner_id=${id}`);
        console.log("Get deleted owner pets", pets);

        pets.forEach(async (pet) => {
          const patchedPet = await patch(`pets/${pet.id}`, { owner_id: 0 });
          console.log(`Patch pet ${pet.id} owner`, patchedPet);
        });

        setLoading(false);

        navigate("/dashboard/owners");
      } catch (error) {
        setLoading(false);

        console.error(error);
      }
    })();
  };

  return (
    <div className="OwnerDetailsPage">
      <OwnerContact id={id} />
      <PetsList ownerId={id} pets={pets} setPets={setPets} />
      <NewPetModal ownerId={id} setPets={setPets} />
      {/* TODO: context */}
      <ExistingPetModal ownerId={id} setPets={setPets} />
      <Button
        onClick={handleDeleteClick}
        disabled={loading}
        className="btn-accent"
      >
        Delete Owner
      </Button>
    </div>
  );
}
