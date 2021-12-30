import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SignUpForm from "./SignUpForm";

describe("SignUpForm", () => {
  it("should have SignUpForm class", () => {
    render(<SignUpForm />, { wrapper: BrowserRouter });
    const formElement = screen.getByRole("form", { name: "Sign Up" });
    expect(formElement).toBeInTheDocument();
    expect(formElement.classList.contains("SignUpForm")).toBe(true);
  });

  it("should render required First Name text type input", () => {
    render(<SignUpForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("First Name*");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.type).toBe("text");
    expect(inputElement.required).toBe(true);
  });

  it("should update first name value with user input", () => {
    render(<SignUpForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("First Name*");
    fireEvent.change(inputElement, { target: { value: "first name" } });
    expect(inputElement.value).toBe("first name");
  });

  it("should render required Last Name text type input", () => {
    render(<SignUpForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("Last Name*");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.type).toBe("text");
    expect(inputElement.required).toBe(true);
  });

  it("should update last name value with user input", () => {
    render(<SignUpForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("Last Name*");
    fireEvent.change(inputElement, { target: { value: "last name" } });
    expect(inputElement.value).toBe("last name");
  });

  it("should render required Address text type input", () => {
    render(<SignUpForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("Address*");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.type).toBe("text");
    expect(inputElement.required).toBe(true);
  });

  it("should update address value with user input", () => {
    render(<SignUpForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("Address*");
    fireEvent.change(inputElement, { target: { value: "c/ Victoria, 7" } });
    expect(inputElement.value).toBe("c/ Victoria, 7");
  });

  it("should render required Phone tel type input", () => {
    render(<SignUpForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("Phone*");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.type).toBe("tel");
    expect(inputElement.required).toBe(true);
  });

  it("should update phone value with user input", () => {
    render(<SignUpForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("Phone*");
    fireEvent.change(inputElement, { target: { value: "639774728" } });
    expect(inputElement.value).toBe("639774728");
  });

  it("should render required Email type input", () => {
    render(<SignUpForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("Email*");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.type).toBe("email");
    expect(inputElement.required).toBe(true);
  });

  it("should update email value with user input", () => {
    render(<SignUpForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("Email*");
    fireEvent.change(inputElement, { target: { value: "test@email.com" } });
    expect(inputElement.value).toBe("test@email.com");
  });

  it("should render required Password type input", () => {
    render(<SignUpForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("Password*");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.type).toBe("password");
    expect(inputElement.required).toBe(true);
  });

  it("should update password value with user input", () => {
    render(<SignUpForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("Password*");
    fireEvent.change(inputElement, { target: { value: "123456Ab#@!" } });
    expect(inputElement.value).toBe("123456Ab#@!");
  });

  it("should render Confirm Password type input", () => {
    render(<SignUpForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("Confirm Password*");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.type).toBe("password");
    expect(inputElement.required).toBe(true);
  });

  it("should update confirm password value with user input", () => {
    render(<SignUpForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("Confirm Password*");
    fireEvent.change(inputElement, { target: { value: "123456Ab#@!" } });
    expect(inputElement.value).toBe("123456Ab#@!");
  });

  it("should render Sign Up submit type button", () => {
    render(<SignUpForm />, { wrapper: BrowserRouter });
    const buttonElement = screen.getByRole("button", { name: "Sign Up" });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.type).toBe("submit");
  });

  xit("should submit Sign Up form", () => {
    // TODO
  });

  xit("should navigate to Login after submitted", () => {
    // TODO
  });
});
