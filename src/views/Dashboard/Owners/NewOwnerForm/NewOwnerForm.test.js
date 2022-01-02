import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NewOwnerForm from "./NewOwnerForm";

describe("NewOwnerForm", () => {
  it("should render required First Name text type input", () => {
    render(<NewOwnerForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("First Name*");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.type).toBe("text");
    expect(inputElement.required).toBe(true);
  });

  it("should update first name value with user input", () => {
    render(<NewOwnerForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("First Name*");
    fireEvent.change(inputElement, { target: { value: "first name" } });
    expect(inputElement.value).toBe("first name");
  });

  it("should render required Last Name text type input", () => {
    render(<NewOwnerForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("Last Name*");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.type).toBe("text");
    expect(inputElement.required).toBe(true);
  });

  it("should update last name value with user input", () => {
    render(<NewOwnerForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("Last Name*");
    fireEvent.change(inputElement, { target: { value: "last name" } });
    expect(inputElement.value).toBe("last name");
  });

  it("should render required Email type input", () => {
    render(<NewOwnerForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("Email*");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.type).toBe("email");
    expect(inputElement.required).toBe(true);
  });

  it("should update email value with user input", () => {
    render(<NewOwnerForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("Email*");
    fireEvent.change(inputElement, { target: { value: "test@email.com" } });
    expect(inputElement.value).toBe("test@email.com");
  });

  it("should render required Phone tel type input", () => {
    render(<NewOwnerForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("Phone*");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.type).toBe("tel");
    expect(inputElement.required).toBe(true);
  });

  it("should update phone value with user input", () => {
    render(<NewOwnerForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("Phone*");
    fireEvent.change(inputElement, { target: { value: "639674728" } });
    expect(inputElement.value).toBe("639674728");
  });

  it("should render Add submit type button", () => {
    render(<NewOwnerForm />, { wrapper: BrowserRouter });
    const buttonElement = screen.getByRole("button", { name: "Add" });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.type).toBe("submit");
  });

  xit("should submit New Owner form", () => {
    // TODO
  });

  xit("should navigate to Owners List after been submitted", () => {
    // TODO
  });
});
