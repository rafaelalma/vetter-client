import { Button } from "components/buttons";
import useFetch from "hooks/useFetch.hook";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import OwnerContact from "./OwnerContact/OwnerContact";
import "./OwnerDetailsPage.scss";
import PetsList from "./PetsList/PetsList";

export default function OwnerDetailsPage() {
  const [loading, setLoading] = useState(false);

  const params = useParams();

  const { del } = useFetch("http://localhost:3001/");

  const navigate = useNavigate();

  const id = Number.parseInt(params.id, 10);

  const handleDeleteClick = () => {
    (async () => {
      try {
        setLoading(true);

        await del(`owners/${id}`);
        console.log(`Delete owner ${id}`);

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
      <PetsList ownerId={id} />
      <Button onClick={handleDeleteClick} disabled={loading}>
        Delete
      </Button>
    </div>
  );
}
