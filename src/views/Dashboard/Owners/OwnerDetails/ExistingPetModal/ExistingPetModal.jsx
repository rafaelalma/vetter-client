import { Button } from "components/buttons";
import { useState } from "react";
import OwnerlessPatientsList from "./OwnerlessPatientsList/OwnerlessPatientsList";

export default function ExistingPetModal({ ownerId, setPets }) {
  const [showList, setShowList] = useState(false);

  const handleExistingPetClick = () => {
    setShowList((showList) => !showList);
  };

  return (
    <>
      <Button onClick={handleExistingPetClick}>
        {showList ? "Cancel" : "Add Existing Pet"}
      </Button>
      {showList && (
        <OwnerlessPatientsList
          ownerId={ownerId}
          setPets={setPets}
          setShowList={setShowList}
        />
      )}
    </>
  );
}
