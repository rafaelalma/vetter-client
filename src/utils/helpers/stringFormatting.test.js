import { capitalize } from "./stringFormatting.helpers";

describe("capitalize", () => {
  it("should capitalize all lowercase string", () => {
    expect(capitalize("testing capitalize function")).toBe(
      "Testing capitalize function"
    );
  });

  it("should capitalize all uppercase string", () => {
    expect(capitalize("TESTING CAPITALIZE FUNCTION")).toBe(
      "Testing capitalize function"
    );
  });

  it("should capitalize random cased string", () => {
    expect(capitalize("testING CaPiTaLiZe FUNCtion")).toBe(
      "Testing capitalize function"
    );
  });
});
