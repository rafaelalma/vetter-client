import { Button } from "components/buttons";
import useFetch from "hooks/useFetch.hook";
import { useState } from "react";
import { SERVER } from "services/settings";
import OwnersList from "views/Dashboard/Owners/OwnersList/OwnersList";

export default function ExistingOwnerModal({ petId, setOwnerId }) {
  const [showList, setShowList] = useState(false);

  const { patch } = useFetch(SERVER);

  const handleExistingOwnerClick = () => {
    setShowList((showList) => !showList);
  };

  const handleAddOwnerClick = (ownerId) => {
    (async () => {
      try {
        const data = await patch(`pets/${petId}`, { owner_id: ownerId });
        console.log(`Patch pet ${petId}`, data);

        setOwnerId(ownerId);
      } catch (error) {
        console.error(error);
      }
    })();
  };

  return (
    <>
      <Button onClick={handleExistingOwnerClick}>
        {showList ? "Cancel" : "Add Existing Owner"}
      </Button>
      {showList && (
        <OwnersList btnAdd={true} onAddOwnerClick={handleAddOwnerClick} />
      )}
    </>
  );
}
