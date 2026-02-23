import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ToggleButton from "./ToggleButton";

describe("ToggleButton", () => {
  it("renders children", () => {
    render(<ToggleButton isSelected={false}>Bold</ToggleButton>);
    expect(screen.getByRole("button", { name: "Bold" })).toBeInTheDocument();
  });

  it("renders as a button element", () => {
    render(<ToggleButton isSelected={false}>B</ToggleButton>);
    expect(screen.getByRole("button")).toBeInstanceOf(HTMLButtonElement);
  });

  it("handles click events", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<ToggleButton isSelected={false} onClick={onClick}>B</ToggleButton>);
    await user.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("handles disabled state", () => {
    render(<ToggleButton isSelected={false} disabled>B</ToggleButton>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("renders with isSelected=true", () => {
    render(<ToggleButton isSelected>B</ToggleButton>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("renders with isSelected=false", () => {
    render(<ToggleButton isSelected={false}>B</ToggleButton>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("renders with different variants", () => {
    const variants = ["filled", "tonal", "outline", "elevated"] as const;
    for (const variant of variants) {
      const { unmount } = render(
        <ToggleButton isSelected={false} variant={variant}>B</ToggleButton>
      );
      expect(screen.getByRole("button")).toBeInTheDocument();
      unmount();
    }
  });

  it("renders with all variants in selected state", () => {
    const variants = ["filled", "tonal", "outline", "elevated"] as const;
    for (const variant of variants) {
      const { unmount } = render(
        <ToggleButton isSelected variant={variant}>B</ToggleButton>
      );
      expect(screen.getByRole("button")).toBeInTheDocument();
      unmount();
    }
  });

  it("forwards native button props", () => {
    render(
      <ToggleButton isSelected={false} aria-pressed="false" type="button">
        B
      </ToggleButton>
    );
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-pressed", "false");
    expect(button).toHaveAttribute("type", "button");
  });
});
