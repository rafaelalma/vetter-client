import { render, screen } from "@testing-library/react";
import { Input } from "./Input";

describe("Input", () => {
  it("should render an input element", () => {
    render(<Input />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  it("should have 'input' class", () => {
    render(<Input />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement.classList.contains("input")).toBe(true);
  });

  it("should have a custom class when it receives a className prop", () => {
    render(<Input className="class-name" />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement.classList.contains("class-name")).toBe(true);
  });

  it("should have a placeholder attribute when it receives a placeholder prop", () => {
    render(<Input placeholder="placeholder" />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement.placeholder).toBe("placeholder");
  });

  it("should have label text with 'label' class when it receives a placeholder prop", () => {
    render(<Input placeholder="placeholder" />);
    const labelElement = screen.getByText("placeholder");
    expect(labelElement).toBeInTheDocument();
    expect(labelElement.classList.contains("label")).toBe(true);
  });

  it("should have required label text with 'input-required' class when it receives a required prop", () => {
    render(<Input required />);
    const spanElement = screen.getByText("*");
    expect(spanElement).toBeInTheDocument();
    expect(spanElement.classList.contains("input-required")).toBe(true);
  });

  it("should have a required attribute when it receives a required prop", () => {
    render(<Input required />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement.required).toBe(true);
  });

  it("should have a disabled attribute when it receives a disabled prop", () => {
    render(<Input disabled />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement.disabled).toBe(true);
  });

  it("should be of type 'text' when it doesn't receive a type prop", () => {
    render(<Input />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement.type).toBe("text");
  });

  it("should be of type 'email' when it receives an email type prop", () => {
    render(<Input type="email" />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement.type).toBe("email");
  });
});
