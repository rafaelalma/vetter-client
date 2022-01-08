import { Loader } from "components/loaders";
import useFetch from "hooks/useFetch.hook";
import useFirstTimeGetSet from "hooks/useFirstTimeGetSet.hook";
import propTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SERVER } from "services/settings";
import "./OwnerInformation.scss";

export default function OwnerInformation({ id }) {
  const [contact, setContact] = useState({});
  const [loading, setLoading] = useState(false);

  const { get } = useFetch(SERVER);

  useFirstTimeGetSet(
    get,
    `owners/${id}`,
    setContact,
    setLoading,
    `Owner ${id} information`
  );

  const { first_name, last_name, email, phone } = contact;

  return loading ? (
    <Loader />
  ) : (
    <div className="OwnerInformation">
      <h3>
        <Link to={`/dashboard/owners/${id}`} className="link-accent">
          {first_name} {last_name}
        </Link>
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

OwnerInformation.propTypes = {
  id: propTypes.number.isRequired,
};
