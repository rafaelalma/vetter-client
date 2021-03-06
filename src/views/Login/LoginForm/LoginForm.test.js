import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LoginForm from "./LoginForm";

describe("LoginForm", () => {
  it("should render Email type input", () => {
    render(<LoginForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("Email*");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.type).toBe("email");
  });

  it("should update email value with user input", () => {
    render(<LoginForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("Email*");
    fireEvent.change(inputElement, { target: { value: "test@email.com" } });
    expect(inputElement.value).toBe("test@email.com");
  });

  it("should render Password type input", () => {
    render(<LoginForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("Password*");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.type).toBe("password");
  });

  it("should update password value with user input", () => {
    render(<LoginForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("Password*");
    fireEvent.change(inputElement, { target: { value: "123456Ab#@!" } });
    expect(inputElement.value).toBe("123456Ab#@!");
  });

  it("should render Login submit type button", () => {
    render(<LoginForm />, { wrapper: BrowserRouter });
    const buttonElement = screen.getByRole("button", { name: "Login" });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.type).toBe("submit");
  });

  xit("should submit Login form", () => {
    // TODO
  });

  xit("should login if valid user", () => {
    // TODO
  });

  xit("should navigate to Dashboard if valid user", () => {
    // TODO
  });
});
