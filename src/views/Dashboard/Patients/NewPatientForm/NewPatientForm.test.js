import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NewPatientForm from "./NewPatientForm";

describe("NewPatientForm", () => {
  it("should render required Name text type input", () => {
    render(<NewPatientForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("Name*");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.type).toBe("text");
    expect(inputElement.required).toBe(true);
  });

  it("should update name value with user input", () => {
    render(<NewPatientForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("Name*");
    fireEvent.change(inputElement, { target: { value: "name" } });
    expect(inputElement.value).toBe("name");
  });

  it("should render not required Birth Date type input", () => {
    render(<NewPatientForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("Birth Date");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.type).toBe("date");
    expect(inputElement.required).toBe(false);
  });

  it("should update birth date value with user input", () => {
    render(<NewPatientForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("Birth Date");
    fireEvent.change(inputElement, { target: { value: "1992-10-30" } });
    expect(inputElement.value).toBe("1992-10-30");
  });

  it("should render required Species text type input", () => {
    render(<NewPatientForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("Species*");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.type).toBe("text");
    expect(inputElement.required).toBe(true);
  });

  it("should update species value with user input", () => {
    render(<NewPatientForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("Species*");
    fireEvent.change(inputElement, { target: { value: "dog" } });
    expect(inputElement.value).toBe("dog");
  });

  it("should render not required Breed text type input", () => {
    render(<NewPatientForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("Breed");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.type).toBe("text");
    expect(inputElement.required).toBe(false);
  });

  it("should update breed value with user input", () => {
    render(<NewPatientForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("Breed");
    fireEvent.change(inputElement, { target: { value: "pinscher" } });
    expect(inputElement.value).toBe("pinscher");
  });

  it("should render not required Color text type input", () => {
    render(<NewPatientForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("Color");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.type).toBe("text");
    expect(inputElement.required).toBe(false);
  });

  it("should update color value with user input", () => {
    render(<NewPatientForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("Color");
    fireEvent.change(inputElement, { target: { value: "black" } });
    expect(inputElement.value).toBe("black");
  });

  it("should render required Vaccination Status text type input", () => {
    render(<NewPatientForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("Vaccination Status*");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.type).toBe("text");
    expect(inputElement.required).toBe(true);
  });

  it("should update vaccination status value with user input", () => {
    render(<NewPatientForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("Vaccination Status*");
    fireEvent.change(inputElement, { target: { value: "current" } });
    expect(inputElement.value).toBe("current");
  });

  it("should render required Gender text type input", () => {
    render(<NewPatientForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("Gender*");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.type).toBe("text");
    expect(inputElement.required).toBe(true);
  });

  it("should update gender value with user input", () => {
    render(<NewPatientForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("Gender*");
    fireEvent.change(inputElement, { target: { value: "male" } });
    expect(inputElement.value).toBe("male");
  });

  it("should render required Spayed or Neutered text type input", () => {
    render(<NewPatientForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("Spayed or Neutered*");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.type).toBe("text");
    expect(inputElement.required).toBe(true);
  });

  it("should update spayed or neutered value with user input", () => {
    render(<NewPatientForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("Spayed or Neutered*");
    fireEvent.change(inputElement, { target: { value: "spayed" } });
    expect(inputElement.value).toBe("spayed");
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

  xit("should navigate to Patients List after been submitted", () => {
    // TODO
  });
});
