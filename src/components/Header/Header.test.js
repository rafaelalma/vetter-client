import { fireEvent, render, screen } from "@testing-library/react";
import {
  AuthenticationContext,
  AuthenticationProvider,
} from "context/authentication/AuthenticationContext";
import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

function Wrapper() {
  return (
    <BrowserRouter>
      <AuthenticationProvider>
        <AuthenticationConsumer />
      </AuthenticationProvider>
    </BrowserRouter>
  );
}

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
      <Header />
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleLogoutClick}>Logout</button>
    </>
  );
}

describe("Header", () => {
  it("should render App title", () => {
    render(<Header />, { wrapper: Wrapper });
    expect(screen.getByRole("heading", { name: "Vetter" })).toBeInTheDocument();
  });

  it("should render Login and Sign Up links if the user is not logged in", () => {
    render(<Header />, { wrapper: Wrapper });
    const button = screen.getByRole("button", { name: "Logout" });
    fireEvent.click(button);
    expect(screen.getByRole("link", { name: "Login" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Sign Up" })).toBeInTheDocument();
  });

  it("should render Dashboard link if the user is logged in", () => {
    render(<Header />, { wrapper: Wrapper });
    const button = screen.getByRole("button", { name: "Login" });
    fireEvent.click(button);
    expect(screen.getByRole("link", { name: "Dashboard" })).toBeInTheDocument();
  });
});
