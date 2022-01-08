import { Button } from "components/buttons";
import { useState } from "react";
import NewPatientForm from "views/Dashboard/Patients/NewPatientForm/NewPatientForm";

export default function NewPetModal() {
  const [showForm, setShowForm] = useState(false);

  const handleNewPetClick = () => {
    setShowForm((showForm) => !showForm);
  };

  return (
    <>
      <Button onClick={handleNewPetClick}>
        {showForm ? "Cancel" : "Add New Pet"}
      </Button>
      {showForm && <NewPatientForm />}
    </>
  );
}
