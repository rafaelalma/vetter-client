import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/buttons";
import { Input } from "../../../components/forms";
import { AuthenticationContext } from "../../../context/authentication/AuthenticationContext";
import "./LoginForm.scss";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const context = useContext(AuthenticationContext);

  const navigate = useNavigate();

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    // TODO: backend

    context.login();

    navigate("/dashboard");
  };

  return (
    <form className="Login" onSubmit={handleLoginSubmit}>
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
      <Button type="submit">Login</Button>
    </form>
  );
}
