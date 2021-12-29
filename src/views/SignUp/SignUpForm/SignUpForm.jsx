import { Button } from "components/buttons";
import { Input } from "components/forms";
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

  const navigate = useNavigate();

  const handleSignUpSubmit = (event) => {
    event.preventDefault();

    // TODO

    navigate("/login");
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
      <Button type="submit">Sign Up</Button>
    </form>
  );
}
