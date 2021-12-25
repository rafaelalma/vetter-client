import { fireEvent, render, screen } from "@testing-library/react";
import { useContext } from "react";
import {
  AuthenticationContext,
  AuthenticationProvider,
} from "./AuthenticationContext";

function AuthenticationConsumer() {
  const context = useContext(AuthenticationContext);

  const handleLoginClick = () => {
    context.login();
  };

  const handleLogoutClick = () => {
    context.logout();
  };

  return (
    <>
      {context.authentication.toString()}
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleLogoutClick}>Logout</button>
    </>
  );
}

describe("AuthenticationContext", () => {
  it("should provide authentication context", () => {
    render(<AuthenticationConsumer />, { wrapper: AuthenticationProvider });
    expect(screen.getByText("false")).toBeInTheDocument();
  });

  it("should provide login", () => {
    render(<AuthenticationConsumer />, { wrapper: AuthenticationProvider });
    const button = screen.getByRole("button", { name: "Login" });
    fireEvent.click(button);
    expect(screen.getByText("true")).toBeInTheDocument();
  });

  it("should provide logout", () => {
    render(<AuthenticationConsumer />, { wrapper: AuthenticationProvider });
    const button = screen.getByRole("button", { name: "Logout" });
    fireEvent.click(button);
    expect(screen.getByText("false")).toBeInTheDocument();
  });
});
