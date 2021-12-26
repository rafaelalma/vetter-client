import { Button } from "components/buttons";
import { Input } from "components/forms";
import { useState } from "react";
import "./SignUpForm.scss";

export default function SignUpForm() {
  const [firstName, setFirsName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    // TODO
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
        placeholder="Email"
        required
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Input
        placeholder="Password"
        required
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Input
        placeholder="Confirm Password"
        required
        type="password"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
      />
      <Button type="submit">Sign Up</Button>
    </form>
  );
}
