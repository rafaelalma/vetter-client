import { fireEvent, render, screen } from "@testing-library/react";
import { useContext } from "react";
import {
  AuthenticationContext,
  AuthenticationProvider,
} from "./AuthenticationContext";

function AuthenticationConsumer() {
  const context = useContext(AuthenticationContext);

  const handleAuthentication = () => {
    context.authenticate();
  };

  return (
    <>
      {context.authentication.toString()}
      <button onClick={handleAuthentication}>Authenticate</button>
    </>
  );
}

describe("AuthenticationContext", () => {
  it("should provide authentication context", () => {
    render(<AuthenticationConsumer />, { wrapper: AuthenticationProvider });
    expect(screen.getByText("false")).toBeInTheDocument();
  });

  it("should provide authentication updating", () => {
    render(<AuthenticationConsumer />, { wrapper: AuthenticationProvider });
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(screen.getByText("true")).toBeInTheDocument();
  });
});
