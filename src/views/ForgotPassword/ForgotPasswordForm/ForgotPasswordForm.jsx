import { Button } from "components/buttons";
import { Input } from "components/forms";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPasswordForm.scss";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleForgotPasswordSubmit = (event) => {
    event.preventDefault();

    // TODO: send email with password

    navigate("/login");
  };

  return (
    <form
      aria-label="Forgot Password"
      className="ForgotPasswordForm"
      onSubmit={handleForgotPasswordSubmit}
    >
      <Input
        placeholder="Email"
        required
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        autoFocus
      />
      <Button type="submit">Send Email</Button>
    </form>
  );
}
