import { Button } from "components/buttons";
import { Loader } from "components/loaders";
import useFetch from "hooks/useFetch.hook";
import useFirstTimeGetSet from "hooks/useFirstTimeGetSet.hook";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./OwnerDetails.scss";

export default function OwnerDetails() {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const params = useParams();

  const navigate = useNavigate();

  const { get, del } = useFetch("http://localhost:3001/");

  const id = Number.parseInt(params.id, 10);

  const { first_name, last_name, email, phone } = details;

  useFirstTimeGetSet(
    get,
    `owners/${id}`,
    setDetails,
    setLoading,
    `Owner ${id} details`
  );

  const handleDeleteClick = () => {
    (async () => {
      try {
        setLoading(true);

        await del(`owners/${id}`);
        console.log(`Delete owner ${id}`);

        setLoading(false);

        navigate("/dashboard/owners");
      } catch (error) {
        setLoading(false);

        console.error(error);
      }
    })();
  };

  return loading ? (
    <Loader />
  ) : (
    <div className="OwnerDetails">
      <h3>
        {first_name} {last_name}
      </h3>
      <p>
        <strong>Email: </strong>
        {email}
      </p>
      <p>
        <strong>Phone: </strong>
        {phone}
      </p>
      <Button
        onClick={handleDeleteClick}
        disabled={loading}
        className="owner-details-delete-btn"
      >
        Delete
      </Button>
    </div>
  );
}
