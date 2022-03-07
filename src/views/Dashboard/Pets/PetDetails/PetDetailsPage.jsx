import { Button } from "components/buttons";
import useFetch from "hooks/useFetch.hook";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SERVER } from "services/settings";
import ExistingOwnerModal from "./ExistingOwnerModal/ExistingOwnerModal";
import NewOwnerModal from "./NewOwnerModal/NewOwnerModal";
import OwnerInformation from "./OwnerInformation/OwnerInformation";
import "./PetDetailsPage.scss";
import PetInformation from "./PetInformation/PetInformation";

export default function PetDetailsPage() {
  const [ownerId, setOwnerId] = useState();
  const [loading, setLoading] = useState(false);

  const params = useParams();

  const navigate = useNavigate();

  const { del } = useFetch(SERVER);

  const id = Number.parseInt(params.id, 10);

  const handleDeleteClick = () => {
    (async () => {
      try {
        setLoading(true);

        await del(`pets/${id}`);
        console.log(`Delete pet ${id}`);

        setLoading(false);

        navigate("/dashboard/pets");
      } catch (error) {
        setLoading(false);

        console.error(error);
      }
    })();
  };

  return (
    <div className="PetDetailsPage">
      <PetInformation id={id} setOwnerId={setOwnerId} />
      {ownerId ? (
        <OwnerInformation id={ownerId} />
      ) : (
        <>
          <NewOwnerModal petId={id} setOwnerId={setOwnerId} />
          <ExistingOwnerModal petId={id} setOwnerId={setOwnerId} />
        </>
      )}
      <Button
        onClick={handleDeleteClick}
        disabled={loading}
        className="btn-accent"
      >
        Delete Pet
      </Button>
    </div>
  );
}
