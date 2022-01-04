import { Button } from "components/buttons";
import useFetch from "hooks/useFetch.hook";
import { useState } from "react";
import NewOwnerForm from "views/Dashboard/Owners/NewOwnerForm/NewOwnerForm";

export default function NewOwnerModal({ patientId, setOwnerId }) {
  const [showForm, setShowForm] = useState(false);

  const { patch } = useFetch("http://localhost:3001/");

  const handleNewOwnerClick = () => {
    setShowForm((showForm) => !showForm);
  };

  const handleNewOwnerSubmit = (ownerId) => {
    (async () => {
      try {
        const data = await patch(`pets/${patientId}`, { owner_id: ownerId });
        console.log(`Patch patient ${patientId}`, data);

        setOwnerId(ownerId);
      } catch (error) {
        console.error(error);
      }
    })();
  };

  return (
    <>
      <Button onClick={handleNewOwnerClick}>
        {showForm ? "Cancel" : "Add New Owner"}
      </Button>
      {showForm && <NewOwnerForm onNewOwnerSubmit={handleNewOwnerSubmit} />}
    </>
  );
}
