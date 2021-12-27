import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NewPatientForm from "./NewPatientForm";

describe("NewPatientForm", () => {
  it("should render required Name text type input", () => {
    render(<NewPatientForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("Name*");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.type).toBe("text");
  });

  it("should update name value with user input", () => {
    render(<NewPatientForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("Name*");
    fireEvent.change(inputElement, { target: { value: "name" } });
    expect(inputElement.value).toBe("name");
  });

  it("should render Birth Date type input", () => {
    render(<NewPatientForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("Birth Date");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.type).toBe("date");
  });

  it("should update birth date value with user input", () => {
    render(<NewPatientForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("Birth Date");
    fireEvent.change(inputElement, { target: { value: "1992-10-30" } });
    expect(inputElement.value).toBe("1992-10-30");
  });

  it("should render Add submit type button", () => {
    render(<NewPatientForm />, { wrapper: BrowserRouter });
    const buttonElement = screen.getByRole("button", { name: "Add" });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.type).toBe("submit");
  });

  xit("should submit New Patient form", () => {
    // TODO
  });

  xit("should navigate to Patients List after submitted", () => {
    // TODO
  });
});
