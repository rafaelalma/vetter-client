import { Loader } from "components/loaders";
import useFetch from "hooks/useFetch.hook";
import { useEffect, useState } from "react";
import PatientCard from "./PatientCard/PatientCard";
import "./PatientsList.scss";

export default function PatientsList() {
  const [patients, setPatients] = useState([]);
  const { get, loading } = useFetch("http://localhost:3001/");

  useEffect(() => {
    (async () => {
      try {
        const data = await get("patients");
        console.log("Patients", data);

        setPatients(data);
      } catch (error) {
        console.error(error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading && <Loader />}
      <ul className="PatientsList">
        {patients.map((patient) => (
          <PatientCard key={patient.id} patient={patient} />
        ))}
      </ul>
    </>
  );
}
