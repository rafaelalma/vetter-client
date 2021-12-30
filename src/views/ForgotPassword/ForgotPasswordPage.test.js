import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ForgotPasswordPage from "./ForgotPasswordPage";

describe("ForgotPasswordPage", () => {
  it("should render Forgot Password form", () => {
    render(<ForgotPasswordPage />, { wrapper: BrowserRouter });
    const formElement = screen.getByRole("form", { name: "Forgot Password" });
    expect(formElement).toBeInTheDocument();
    expect(formElement.classList.contains("ForgotPasswordForm")).toBe(true);
  });
});
