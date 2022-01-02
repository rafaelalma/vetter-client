import { Button } from "components/buttons";
import { Input } from "components/forms";
import { AuthenticationContext } from "context/authentication/AuthenticationContext";
import useFetch from "hooks/useFetch.hook";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.scss";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const { get } = useFetch("http://localhost:3001/");

  const context = useContext(AuthenticationContext);

  const navigate = useNavigate();

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    const newLogin = {
      email,
      password,
    };

    // TODO: backend
    /* (async () => {
      try {
        setLoading(true);

        const data = await post("logins", newLogin);
        console.log("Login", data);

        setLoading(false);

        if (data) {
          context.login();

          navigate("/dashboard");
        }
      } catch (error) {
        setLoading(false);

        console.error(error);
      }
    })(); */

    // TODO: remove
    (async () => {
      try {
        setLoading(true);

        const vets = await get("vets");
        console.log("Vets", vets);

        setLoading(false);

        let goodLogin = false;

        vets.forEach((vet) => {
          if (
            vet.email === newLogin.email &&
            vet.password === newLogin.password
          ) {
            goodLogin = true;
          }
        });

        if (goodLogin) {
          context.login();
          navigate("/dashboard");
        } else {
          throw new Error("Bad login");
        }
      } catch (error) {
        setLoading(false);

        console.error(error);
      }
    })();
  };

  return (
    <form aria-label="Login" className="LoginForm" onSubmit={handleLoginSubmit}>
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
      <Button type="submit" disabled={loading}>
        Login
      </Button>
    </form>
  );
}
