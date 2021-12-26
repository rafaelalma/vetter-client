import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ForgotPasswordForm from "./ForgotPasswordForm";

describe("ForgotPasswordForm", () => {
  it("should render Email type input", () => {
    render(<ForgotPasswordForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("Email*");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.type).toBe("email");
  });

  it("should update email value with user input", () => {
    render(<ForgotPasswordForm />, { wrapper: BrowserRouter });
    const inputElement = screen.getByLabelText("Email*");
    fireEvent.change(inputElement, { target: { value: "test@email.com" } });
    expect(inputElement.value).toBe("test@email.com");
  });

  it("should render Send Email submit type button", () => {
    render(<ForgotPasswordForm />, { wrapper: BrowserRouter });
    const buttonElement = screen.getByRole("button", { name: "Send Email" });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.type).toBe("submit");
  });

  xit("should submit Forgot Password form", () => {
    // TODO
  });

  xit("should navigate to Login after been submitted", () => {
    // TODO
  });
});
