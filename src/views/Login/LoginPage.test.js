import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "./LoginPage";

describe("LoginPage", () => {
  it("should render Login form", () => {
    render(<LoginPage />, { wrapper: BrowserRouter });
    const formElement = screen.getByRole("form", { name: "Login" });
    expect(formElement).toBeInTheDocument();
    expect(formElement.classList.contains("LoginForm")).toBe(true);
  });

  it("should render Forgot Password link", () => {
    render(<LoginPage />, { wrapper: BrowserRouter });
    const linkElement = screen.getByRole("link", {
      name: "Forgot your password?",
    });
    expect(linkElement).toBeInTheDocument();
  });
});
