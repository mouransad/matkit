import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Provider from "./Provider";

describe("Provider", () => {
  it("renders children", () => {
    const { getByText } = render(
      <Provider>
        <div>Hello World</div>
      </Provider>
    );
    expect(getByText("Hello World")).toBeInTheDocument();
  });

  it("renders multiple children", () => {
    const { getByText } = render(
      <Provider>
        <span>Child 1</span>
        <span>Child 2</span>
      </Provider>
    );
    expect(getByText("Child 1")).toBeInTheDocument();
    expect(getByText("Child 2")).toBeInTheDocument();
  });

  it("renders without children", () => {
    const { container } = render(<Provider />);
    expect(container).toBeInTheDocument();
  });
});
