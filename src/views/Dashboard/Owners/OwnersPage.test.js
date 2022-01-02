import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import OwnersPage from "./OwnersPage";

describe("OwnersPage", () => {
  it("should render New Patient link", () => {
    render(<OwnersPage />, { wrapper: BrowserRouter });
    const linkElement = screen.getByRole("link", {
      name: "New Owner",
    });
    expect(linkElement).toBeInTheDocument();
  });

  xit("should render Owners List in root route", () => {
    // TODO
  });

  xit("should render New Owner Form in new route", () => {
    // TODO
  });

  xit("should render Owner Details in id route", () => {
    // TODO
  });
});
