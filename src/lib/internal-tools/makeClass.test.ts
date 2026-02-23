import { describe, it, expect } from "vitest";
import { makeClass } from "./makeClass";

describe("makeClass", () => {
  it("always includes 'matkit' as the first class", () => {
    expect(makeClass()).toBe("matkit");
  });

  it("appends string class names", () => {
    expect(makeClass("foo")).toBe("matkit foo");
  });

  it("appends multiple string class names", () => {
    expect(makeClass("foo", "bar")).toBe("matkit foo bar");
  });

  it("handles conditional object syntax", () => {
    expect(makeClass({ active: true, disabled: false })).toBe("matkit active");
  });

  it("handles mixed inputs (strings, objects, arrays)", () => {
    const result = makeClass("foo", { bar: true, baz: false }, ["qux"]);
    expect(result).toBe("matkit foo bar qux");
  });

  it("ignores falsy values", () => {
    expect(makeClass(null, undefined, false, "", 0)).toBe("matkit");
  });

  it("handles nested arrays", () => {
    expect(makeClass(["a", ["b", "c"]])).toBe("matkit a b c");
  });
});
