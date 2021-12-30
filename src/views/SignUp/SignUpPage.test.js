import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SignUpPage from "./SignUpPage";

describe("SignUpPage", () => {
  it("should render Sign Up form", () => {
    render(<SignUpPage />, { wrapper: BrowserRouter });
    const formElement = screen.getByRole("form", { name: "Sign Up" });
    expect(formElement).toBeInTheDocument();
  });
});
