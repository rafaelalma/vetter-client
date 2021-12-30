import { Button } from "components/buttons";
import { Input } from "components/forms";
import useFetch from "hooks/useFetch.hook";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpForm.scss";

export default function SignUpForm() {
  const [firstName, setFirsName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const { post } = useFetch("http://localhost:3001/");

  const navigate = useNavigate();

  const handleSignUpSubmit = (event) => {
    event.preventDefault();

    const newVet = {
      first_name: firstName,
      last_name: lastName,
      address,
      phone,
    };

    const newCredentials = {
      email,
      password,
    };

    (async () => {
      try {
        setLoading(true);

        const [vetData, credentialsData] = await Promise.all([
          post("vets", newVet),
          post("credentials", newCredentials),
        ]);
        console.log("Post vet", vetData);
        console.log("Post credentials", credentialsData);

        setLoading(false);

        navigate("/login");
      } catch (error) {
        setLoading(false);

        console.error(error);
      }
    })();
  };

  return (
    <form className="SignUpForm" onSubmit={handleSignUpSubmit}>
      <Input
        placeholder="First Name"
        required
        value={firstName}
        onChange={(event) => setFirsName(event.target.value)}
      />
      <Input
        placeholder="Last Name"
        required
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
      <Input
        placeholder="Address"
        required
        value={address}
        onChange={(event) => setAddress(event.target.value)}
      />
      <Input
        placeholder="Phone"
        type="tel"
        required
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      />
      <Input
        placeholder="Email"
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Input
        placeholder="Password"
        type="password"
        required
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Input
        placeholder="Confirm Password"
        type="password"
        required
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
      />
      <Button type="submit" disabled={loading}>
        Sign Up
      </Button>
    </form>
  );
}
