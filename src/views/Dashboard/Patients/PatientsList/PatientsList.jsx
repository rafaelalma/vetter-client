import { Loader } from "components/loaders";
import useFetch from "hooks/useFetch.hook";
import useFirstTimeGetSet from "hooks/useFirstTimeGetSet.hook";
import { useState } from "react";
import { SERVER } from "services/settings";
import PatientCard from "./PatientCard/PatientCard";
import "./PatientsList.scss";

export default function PatientsList() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);

  const { get } = useFetch(SERVER);

  useFirstTimeGetSet(get, "pets", setPatients, setLoading, "Patients");

  return loading ? (
    <Loader />
  ) : patients.length > 0 ? (
    <ul className="PatientsList">
      {patients.map((patient) => (
        <PatientCard key={patient.id} patient={patient} />
      ))}
    </ul>
  ) : (
    <p>No patients</p>
  );
}
