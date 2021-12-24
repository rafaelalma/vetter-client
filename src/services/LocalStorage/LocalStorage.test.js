import { LocalStorage } from "./LocalStorage.service";

describe("LocalStorage", () => {
  it("should set values by key", () => {
    LocalStorage.set("key", "value");
    expect(localStorage.getItem("key")).toBe("value");
  });

  it("should get values by key", () => {
    localStorage.setItem("key", "value");
    expect(LocalStorage.get("key")).toBe("value");
  });

  it("should remove values by key", () => {
    localStorage.setItem("key", "value");
    expect(localStorage.getItem("key")).toBe("value");
    LocalStorage.remove("key");
    expect(localStorage.getItem("key")).toBeNull();
  });

  xit("should clear values", () => {
    // TODO
  });
});
