import { fireEvent, render, screen } from "@testing-library/react";
import SignUpForm from "./SignUpForm";

describe("SignUpForm", () => {
  it("should render First Name input", () => {
    render(<SignUpForm />);
    const inputElement = screen.getByLabelText("First Name*");
    expect(inputElement).toBeInTheDocument();
  });

  it("should update first name value with user input", () => {
    render(<SignUpForm />);
    const inputElement = screen.getByLabelText("First Name*");
    fireEvent.change(inputElement, { target: { value: "first name" } });
    expect(inputElement.value).toBe("first name");
  });

  it("should render Last Name input", () => {
    render(<SignUpForm />);
    const inputElement = screen.getByLabelText("Last Name*");
    expect(inputElement).toBeInTheDocument();
  });

  it("should update last name value with user input", () => {
    render(<SignUpForm />);
    const inputElement = screen.getByLabelText("Last Name*");
    fireEvent.change(inputElement, { target: { value: "last name" } });
    expect(inputElement.value).toBe("last name");
  });

  it("should render Email type input", () => {
    render(<SignUpForm />);
    const inputElement = screen.getByLabelText("Email*");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.type).toBe("email");
  });

  it("should update email value with user input", () => {
    render(<SignUpForm />);
    const inputElement = screen.getByLabelText("Email*");
    fireEvent.change(inputElement, { target: { value: "test@email.com" } });
    expect(inputElement.value).toBe("test@email.com");
  });

  it("should render Password type input", () => {
    render(<SignUpForm />);
    const inputElement = screen.getByLabelText("Password*");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.type).toBe("password");
  });

  it("should update password value with user input", () => {
    render(<SignUpForm />);
    const inputElement = screen.getByLabelText("Password*");
    fireEvent.change(inputElement, { target: { value: "123456Ab#@!" } });
    expect(inputElement.value).toBe("123456Ab#@!");
  });

  it("should render Confirm Password type input", () => {
    render(<SignUpForm />);
    const inputElement = screen.getByLabelText("Confirm Password*");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.type).toBe("password");
  });

  it("should update confirm password value with user input", () => {
    render(<SignUpForm />);
    const inputElement = screen.getByLabelText("Confirm Password*");
    fireEvent.change(inputElement, { target: { value: "123456Ab#@!" } });
    expect(inputElement.value).toBe("123456Ab#@!");
  });

  it("should render Sign Up submit type button", () => {
    render(<SignUpForm />);
    const buttonElement = screen.getByRole("button", { name: "Sign Up" });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.type).toBe("submit");
  });

  xit("should submit Sign Up form", () => {
    // TODO
  });
});
