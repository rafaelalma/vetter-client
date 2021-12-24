import {
  AuthenticationContext,
  AuthenticationProvider,
} from "./AuthenticationContext";
import { useContext } from "react";
import { fireEvent, render, screen } from "@testing-library/react";

function AuthenticationConsumerWrapper() {
  return (
    <AuthenticationProvider>
      <AuthenticationConsumer />
    </AuthenticationProvider>
  );
}

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
    render(<AuthenticationConsumerWrapper />);
    expect(screen.getByText("false")).toBeInTheDocument();
  });

  it("should provide authentication updating", () => {
    render(<AuthenticationConsumerWrapper />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(screen.getByText("true")).toBeInTheDocument();
  });
});
