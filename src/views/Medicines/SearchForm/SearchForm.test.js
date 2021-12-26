import { fireEvent, render, screen } from "@testing-library/react";
import SearchForm from "./SearchForm";

describe("SearchForm", () => {
  it("should render Search input", () => {
    render(<SearchForm />);
    const inputElement = screen.getByLabelText("Search");
    expect(inputElement).toBeInTheDocument();
  });

  it("should update search value with user input", () => {
    render(<SearchForm />);
    const inputElement = screen.getByLabelText("Search");
    fireEvent.change(inputElement, { target: { value: "search" } });
    expect(inputElement.value).toBe("search");
  });

  it("should render Search submit type button", () => {
    render(<SearchForm />);
    const buttonElement = screen.getByRole("button", { name: "Search" });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.type).toBe("submit");
  });

  xit("should submit Search form", () => {
    // TODO
  });
});
