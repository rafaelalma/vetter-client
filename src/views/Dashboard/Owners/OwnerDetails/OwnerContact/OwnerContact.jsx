import { Loader } from "components/loaders";
import useFetch from "hooks/useFetch.hook";
import useFirstTimeGetSet from "hooks/useFirstTimeGetSet.hook";
import propTypes from "prop-types";
import { useState } from "react";
import { SERVER } from "services/settings";
import "./OwnerContact.scss";

export default function OwnerContact({ id }) {
  const [contact, setContact] = useState({});
  const [loading, setLoading] = useState(false);

  const { get } = useFetch(SERVER);

  useFirstTimeGetSet(
    get,
    `owners/${id}`,
    setContact,
    setLoading,
    `Owner ${id} details`
  );

  const { first_name, last_name, email, phone } = contact;

  return loading ? (
    <Loader />
  ) : (
    <div className="OwnerContact">
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
    </div>
  );
}

OwnerContact.propTypes = {
  id: propTypes.number.isRequired,
};
