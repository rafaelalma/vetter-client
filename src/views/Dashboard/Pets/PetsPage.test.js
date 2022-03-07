import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PetsPage from "./PetsPage";

describe("PetsPage", () => {
  it("should render New Pet link", () => {
    render(<PetsPage />, { wrapper: BrowserRouter });
    const linkElement = screen.getByRole("link", {
      name: "New Pet",
    });
    expect(linkElement).toBeInTheDocument();
  });

  xit("should render Pets List in root route", () => {
    // TODO
  });

  xit("should render New Pet Form in new route", () => {
    // TODO
  });

  xit("should render Pet Details in id route", () => {
    // TODO
  });
});
