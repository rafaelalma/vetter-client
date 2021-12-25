import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("App", () => {
  it("should render without crashing", () => {
    render(<App />, { wrapper: BrowserRouter });
  });
});
