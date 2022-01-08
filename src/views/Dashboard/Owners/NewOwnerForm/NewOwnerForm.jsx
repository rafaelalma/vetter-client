import { Button } from "components/buttons";
import { Input } from "components/forms";
import useFetch from "hooks/useFetch.hook";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewOwnerForm.scss";

export default function NewOwnerForm({ onNewOwnerSubmit }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [loading, setLoading] = useState(false);

  const { post } = useFetch("http://localhost:3001/");

  const navigate = useNavigate();

  const handleNewOwnerSubmit = (event) => {
    event.preventDefault();

    const newOwner = {
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
    };

    (async () => {
      try {
        setLoading(true);

        const data = await post("owners", newOwner);
        console.log("Post owner", data);

        setLoading(false);

        if (onNewOwnerSubmit) {
          onNewOwnerSubmit(data.id);
        } else {
          navigate(`/dashboard/owners/${data.id}`);
        }
      } catch (error) {
        setLoading(false);

        console.error(error);
      }
    })();
  };

  return (
    <form className="NewOwnerForm" onSubmit={handleNewOwnerSubmit}>
      <Input
        placeholder="First Name"
        required
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
        autoFocus
      />
      <Input
        placeholder="Last Name"
        required
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
      <Input
        placeholder="Email"
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Input
        placeholder="Phone"
        type="tel"
        required
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      />
      <Button type="submit" disabled={loading}>
        Add New Owner
      </Button>
    </form>
  );
}
