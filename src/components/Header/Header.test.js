import { fireEvent, render, screen } from "@testing-library/react";
import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  AuthenticationContext,
  AuthenticationProvider,
} from "../../context/authentication/AuthenticationContext";
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

  const handleAuthentication = () => {
    context.authenticate();
  };

  return (
    <>
      <Header />
      <button onClick={handleAuthentication}>Authenticate</button>
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
    expect(screen.getByRole("link", { name: "Login" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Sign Up" })).toBeInTheDocument();
  });

  it("should render Dashboard and Medicines links if the user is logged in", () => {
    render(<Header />, { wrapper: Wrapper });
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(screen.getByRole("link", { name: "Dashboard" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Medicines" })).toBeInTheDocument();
  });
});
