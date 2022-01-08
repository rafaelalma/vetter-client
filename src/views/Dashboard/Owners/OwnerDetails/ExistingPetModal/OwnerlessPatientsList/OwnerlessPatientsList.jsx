import { Loader } from "components/loaders";
import useFetch from "hooks/useFetch.hook";
import useFirstTimeGetSet from "hooks/useFirstTimeGetSet.hook";
import { useState } from "react";
import PatientCard from "views/Dashboard/Patients/PatientsList/PatientCard/PatientCard";
import "./OwnerlessPatientsList.scss";

export default function OwnerlessPatientsList({
  ownerId,
  setPets,
  setShowList,
}) {
  const [ownerlessPatients, setOwnerlessPatients] = useState([]);
  const [loading, setLoading] = useState(false);

  const { get } = useFetch("http://localhost:3001/");

  useFirstTimeGetSet(
    get,
    "pets?owner_id=0",
    setOwnerlessPatients,
    setLoading,
    "Ownerless patients"
  );

  return loading ? (
    <Loader />
  ) : ownerlessPatients.length > 0 ? (
    <ul className="OwnerlessPatientsList">
      {ownerlessPatients.map((ownerlessPatient) => (
        <PatientCard
          key={ownerlessPatient.id}
          patient={ownerlessPatient}
          btnAdd
          ownerId={ownerId}
          setPets={setPets}
          setShowList={setShowList}
        />
      ))}
    </ul>
  ) : (
    <p>No ownerless patients</p>
  );
}
