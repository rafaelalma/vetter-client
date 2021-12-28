import { Loader } from "components/loaders";
import useFetch from "hooks/useFetch.hook";
import useFirstTimeGetSet from "hooks/useFirstTimeGetSet.hook";
import { useState } from "react";
import PatientCard from "./PatientCard/PatientCard";
import "./PatientsList.scss";

export default function PatientsList() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);

  const { get, del } = useFetch("http://localhost:3001/");

  useFirstTimeGetSet(get, "patients", setPatients, setLoading, "Patients");

  const handleDeleteClick = (id) => {
    (async () => {
      try {
        setLoading(true);

        await del(`patients/${id}`);
        console.log(`Delete patient ${id}`);

        setPatients(patients.filter((patient) => patient.id !== id));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  };

  return loading ? (
    <Loader />
  ) : (
    <ul className="PatientsList">
      {patients.map((patient) => (
        <PatientCard
          key={patient.id}
          patient={patient}
          onDeleteClick={handleDeleteClick}
          loading={loading}
        />
      ))}
    </ul>
  );
}
