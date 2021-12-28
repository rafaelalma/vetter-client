import { Loader } from "components/loaders";
import useFetch from "hooks/useFetch.hook";
import useFirstTimeGetSet from "hooks/useFirstTimeGetSet.hook";
import { useState } from "react";
import OwnerCard from "./OwnerCard/OwnerCard";
import "./OwnersList.scss";

export default function OwnersList() {
  const [owners, setOwners] = useState([]);
  const [loading, setLoading] = useState(false);

  const { get } = useFetch("http://localhost:3001/");

  useFirstTimeGetSet(get, "owners", setOwners, setLoading, "Owners");

  return loading ? (
    <Loader />
  ) : (
    <ul className="OwnersList">
      {owners.map((owner) => (
        <OwnerCard key={owner.id} owner={owner} />
      ))}
    </ul>
  );
}
