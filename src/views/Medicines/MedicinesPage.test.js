import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MedicinesPage from "./MedicinesPage";

describe("MedicinesPage", () => {
  it("should render Latest link", () => {
    render(<MedicinesPage />, { wrapper: BrowserRouter });
    const linkElement = screen.getByRole("link", {
      name: "Latest",
    });
    expect(linkElement).toBeInTheDocument();
  });

  it("should render Saved link", () => {
    render(<MedicinesPage />, { wrapper: BrowserRouter });
    const linkElement = screen.getByRole("link", {
      name: "Saved",
    });
    expect(linkElement).toBeInTheDocument();
  });

  it("should render Categories link", () => {
    render(<MedicinesPage />, { wrapper: BrowserRouter });
    const linkElement = screen.getByRole("link", {
      name: "Categories",
    });
    expect(linkElement).toBeInTheDocument();
  });

  it("should render Search link", () => {
    render(<MedicinesPage />, { wrapper: BrowserRouter });
    const linkElement = screen.getByRole("link", {
      name: "Search",
    });
    expect(linkElement).toBeInTheDocument();
  });

  xit("should render Latest Page in root route", () => {
    // TODO
  });

  xit("should render Saved Page in saved route", () => {
    // TODO
  });

  xit("should render Categories Page in categories route", () => {
    // TODO
  });

  xit("should render Search Page in search route", () => {
    // TODO
  });
});
