import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

describe("App", () => {
  it("should render without crashing", () => {
    render(<App />);
  });

  it("should render Header", () => {
    render(<App />);
    const headerElement = screen.getByRole("banner");
    expect(headerElement).toBeInTheDocument();
  });

  xit("should render Home Page in root route", () => {
    // TODO
  });

  xit("should render Sign Up Page in sign-up route", () => {
    // TODO
  });

  xit("should render Login Page in login route", () => {
    // TODO
  });

  xit("should render Forgot Password Page in forgot-password route", () => {
    // TODO
  });

  xit("should render Dashboard Page in dashboard route", () => {
    // TODO
  });

  xit("should render Medicines Page in medicines route", () => {
    // TODO
  });

  xit("should render Not Found Page in catch all route", () => {
    // TODO
  });
});
