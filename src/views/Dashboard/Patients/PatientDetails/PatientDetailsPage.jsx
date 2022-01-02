import { Button } from "components/buttons";
import { Loader } from "components/loaders";
import useFetch from "hooks/useFetch.hook";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import OwnerInformation from "./OwnerInformation/OwnerInformation";
import "./PatientDetailsPage.scss";
import PatientInformation from "./PatientInformation/PatientInformation";

export default function PatientDetailsPage() {
  const [loading, setLoading] = useState(false);

  const params = useParams();

  const navigate = useNavigate();

  const { del } = useFetch("http://localhost:3001/");

  const id = Number.parseInt(params.id, 10);

  const handleDeleteClick = () => {
    (async () => {
      try {
        setLoading(true);

        await del(`pets/${id}`);
        console.log(`Delete patient ${id}`);

        setLoading(false);

        navigate("/dashboard/patients");
      } catch (error) {
        setLoading(false);

        console.error(error);
      }
    })();
  };

  return loading ? (
    <Loader />
  ) : (
    <div className="PatientDetailsPage">
      <PatientInformation id={id} />
      <OwnerInformation id={id} />
      <Button onClick={handleDeleteClick} disabled={loading}>
        Delete
      </Button>
    </div>
  );
}
