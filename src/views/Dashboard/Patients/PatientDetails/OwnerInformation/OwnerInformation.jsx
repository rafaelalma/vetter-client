import { Loader } from "components/loaders";
import useFetch from "hooks/useFetch.hook";
import useFirstTimeGetSet from "hooks/useFirstTimeGetSet.hook";
import propTypes from "prop-types";
import { useState } from "react";
import "./OwnerInformation.scss";

export default function OwnerInformation({ id }) {
  const [contact, setContact] = useState({});
  const [loading, setLoading] = useState(false);

  const { get } = useFetch("http://localhost:3001/");

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

OwnerInformation.propTypes = {
  id: propTypes.number.isRequired,
};
