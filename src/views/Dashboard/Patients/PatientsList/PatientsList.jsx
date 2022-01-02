import { Loader } from "components/loaders";
import useFetch from "hooks/useFetch.hook";
import useFirstTimeGetSet from "hooks/useFirstTimeGetSet.hook";
import { useState } from "react";
import PatientCard from "./PatientCard/PatientCard";
import "./PatientsList.scss";

export default function PatientsList() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);

  const { get } = useFetch("http://localhost:3001/");

  useFirstTimeGetSet(get, "patients", setPatients, setLoading, "Patients");

  return loading ? (
    <Loader />
  ) : (
    <ul className="PatientsList">
      {patients.map((patient) => (
        <PatientCard key={patient.id} patient={patient} />
      ))}
    </ul>
  );
}
