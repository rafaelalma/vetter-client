import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("should render a button element", () => {
    render(<Button />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  it("should have text content when it receives children text content as a prop", () => {
    render(<Button>Children</Button>);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement.textContent).toBe("Children");
  });

  it("should have children elements when it receives children elements as a prop", () => {
    render(
      <Button>
        <span>Children</span>
      </Button>
    );
    const buttonElement = screen.getByRole("button");
    expect(buttonElement.innerHTML).toBe("<span>Children</span>");
  });

  it("should have 'btn' and 'btn-default' classes", () => {
    render(<Button />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement.classList.contains("btn")).toBe(true);
    expect(buttonElement.classList.contains("btn-default")).toBe(true);
  });

  it("should have 'btn' and 'btn-outline' classes when it receives an outline prop", () => {
    render(<Button outline />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement.classList.contains("btn")).toBe(true);
    expect(buttonElement.classList.contains("btn-outline")).toBe(true);
  });

  it("should have a custom class when it receives a className prop", () => {
    render(<Button className="class-name" />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement.classList.contains("class-name")).toBe(true);
  });

  it("should have a disabled attribute when it receives a disabled prop", () => {
    render(<Button disabled />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement.disabled).toBe(true);
  });
});
