import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Checkbox from "./Checkbox";

describe("Checkbox", () => {
  it("renders an input of type checkbox", () => {
    render(<Checkbox />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("renders a label when provided", () => {
    render(<Checkbox label="Accept terms" />);
    expect(screen.getByText("Accept terms")).toBeInTheDocument();
  });

  it("does not render label span when label is not provided", () => {
    const { container } = render(<Checkbox />);
    expect(container.querySelector(".matkit__checkbox__label")).toBeNull();
  });

  it("is unchecked by default", () => {
    render(<Checkbox />);
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });

  it("can be controlled (checked)", () => {
    render(<Checkbox checked onChange={() => {}} />);
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("can be controlled (unchecked)", () => {
    render(<Checkbox checked={false} onChange={() => {}} />);
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });

  it("supports defaultChecked for uncontrolled usage", () => {
    render(<Checkbox defaultChecked />);
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("fires onChange when clicked", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Checkbox onChange={onChange} />);
    await user.click(screen.getByRole("checkbox"));
    expect(onChange).toHaveBeenCalledOnce();
  });

  it("toggles checked state in uncontrolled mode", async () => {
    const user = userEvent.setup();
    render(<Checkbox />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
    await user.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it("handles disabled state", () => {
    render(<Checkbox disabled />);
    expect(screen.getByRole("checkbox")).toBeDisabled();
  });

  it("does not fire onChange when disabled", async () => {
    const user = userEvent.setup({ pointerEventsCheck: 0 });
    const onChange = vi.fn();
    render(<Checkbox disabled onChange={onChange} />);
    await user.click(screen.getByRole("checkbox"));
    expect(onChange).not.toHaveBeenCalled();
  });

  it("applies disabled class", () => {
    const { container } = render(<Checkbox disabled />);
    expect(container.querySelector(".matkit__checkbox--disabled")).toBeInTheDocument();
  });

  it("sets indeterminate attribute via data attribute", () => {
    render(<Checkbox indeterminate />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toHaveAttribute("data-indeterminate", "true");
  });

  it("sets the indeterminate property on the input element", () => {
    render(<Checkbox indeterminate />);
    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
    expect(checkbox.indeterminate).toBe(true);
  });

  it("renders with different colors", () => {
    const colors = ["primary", "secondary", "tertiary", "error"] as const;
    for (const color of colors) {
      const { unmount } = render(<Checkbox color={color} />);
      expect(screen.getByRole("checkbox")).toBeInTheDocument();
      unmount();
    }
  });

  it("renders with different sizes", () => {
    const sizes = ["small", "medium", "large"] as const;
    for (const size of sizes) {
      const { unmount } = render(<Checkbox size={size} />);
      expect(screen.getByRole("checkbox")).toBeInTheDocument();
      unmount();
    }
  });

  it("applies custom className", () => {
    const { container } = render(<Checkbox className="custom" />);
    const label = container.querySelector("label");
    expect(label?.className).toContain("custom");
  });

  it("forwards id to the input", () => {
    render(<Checkbox id="my-checkbox" />);
    expect(screen.getByRole("checkbox")).toHaveAttribute("id", "my-checkbox");
  });
});
