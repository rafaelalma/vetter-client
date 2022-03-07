import { Button } from "components/buttons";
import { useState } from "react";
import OwnerlessPetsList from "./OwnerlessPetsList/OwnerlessPetsList";

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
        <OwnerlessPetsList
          ownerId={ownerId}
          setPets={setPets}
          setShowList={setShowList}
        />
      )}
    </>
  );
}
