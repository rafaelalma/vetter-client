import { Button } from "components/buttons";
import { useState } from "react";
import NewPetForm from "views/Dashboard/Pets/NewPetForm/NewPetForm";

export default function NewPetModal({ ownerId, setPets }) {
  const [showForm, setShowForm] = useState(false);

  const handleNewPetClick = () => {
    setShowForm((showForm) => !showForm);
  };

  return (
    <>
      <Button onClick={handleNewPetClick}>
        {showForm ? "Cancel" : "Add New Pet"}
      </Button>
      {showForm && (
        <NewPetForm
          ownerId={ownerId}
          setPets={setPets}
          setShowForm={setShowForm}
        />
      )}
    </>
  );
}
