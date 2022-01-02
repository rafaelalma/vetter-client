import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PatientsPage from "./PatientsPage";

describe("PatientsPage", () => {
  it("should render New Patient link", () => {
    render(<PatientsPage />, { wrapper: BrowserRouter });
    const linkElement = screen.getByRole("link", {
      name: "New Patient",
    });
    expect(linkElement).toBeInTheDocument();
  });

  xit("should render Patients List in root route", () => {
    // TODO
  });

  xit("should render New Patient Form in new route", () => {
    // TODO
  });

  xit("should render Patient Details in id route", () => {
    // TODO
  });
});
