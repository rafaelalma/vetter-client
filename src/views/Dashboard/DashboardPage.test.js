import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import DashboardPage from "./DashboardPage";

describe("DashboardPage", () => {
  it("should render Summary link", () => {
    render(<DashboardPage />, { wrapper: BrowserRouter });
    const linkElement = screen.getByRole("link", {
      name: "Summary",
    });
    expect(linkElement).toBeInTheDocument();
  });

  it("should render Patients link", () => {
    render(<DashboardPage />, { wrapper: BrowserRouter });
    const linkElement = screen.getByRole("link", {
      name: "Patients",
    });
    expect(linkElement).toBeInTheDocument();
  });

  it("should render Owners link", () => {
    render(<DashboardPage />, { wrapper: BrowserRouter });
    const linkElement = screen.getByRole("link", {
      name: "Owners",
    });
    expect(linkElement).toBeInTheDocument();
  });

  xit("should render Summary Page in root route", () => {
    // TODO
  });

  xit("should render Patients Page in patients route", () => {
    // TODO
  });

  xit("should render Owners Page in owners route", () => {
    // TODO
  });
});
