import { Loader } from "components/loaders";
import useFetch from "hooks/useFetch.hook";
import useFirstTimeGetSet from "hooks/useFirstTimeGetSet.hook";
import { useState } from "react";
import { SERVER } from "services/settings";
import OwnerCard from "./OwnerCard/OwnerCard";
import "./OwnersList.scss";

export default function OwnersList({ btnAdd, onAddOwnerClick }) {
  const [owners, setOwners] = useState([]);
  const [loading, setLoading] = useState(false);

  const { get } = useFetch(SERVER);

  useFirstTimeGetSet(get, "owners", setOwners, setLoading, "Owners");

  return loading ? (
    <Loader />
  ) : owners.length > 0 ? (
    <ul className="OwnersList">
      {owners.map((owner) => (
        <OwnerCard
          key={owner.id}
          owner={owner}
          btnAdd={btnAdd}
          onAddOwnerClick={onAddOwnerClick}
        />
      ))}
    </ul>
  ) : (
    <p>No owners</p>
  );
}
