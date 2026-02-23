import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ToggleIconButton from "./ToggleIconButton";

describe("ToggleIconButton", () => {
  it("renders icon content", () => {
    render(
      <ToggleIconButton isSelected={false}>
        <svg data-testid="icon" />
      </ToggleIconButton>
    );
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("renders as a button element", () => {
    render(<ToggleIconButton isSelected={false}>★</ToggleIconButton>);
    expect(screen.getByRole("button")).toBeInstanceOf(HTMLButtonElement);
  });

  it("handles click events", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<ToggleIconButton isSelected={false} onClick={onClick}>★</ToggleIconButton>);
    await user.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("handles disabled state", () => {
    render(<ToggleIconButton isSelected={false} disabled>★</ToggleIconButton>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("renders with isSelected=true", () => {
    render(<ToggleIconButton isSelected>★</ToggleIconButton>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("renders with isSelected=false", () => {
    render(<ToggleIconButton isSelected={false}>★</ToggleIconButton>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("renders with different variants", () => {
    const variants = ["filled", "tonal", "outlined", "standard"] as const;
    for (const variant of variants) {
      const { unmount } = render(
        <ToggleIconButton isSelected={false} variant={variant}>★</ToggleIconButton>
      );
      expect(screen.getByRole("button")).toBeInTheDocument();
      unmount();
    }
  });

  it("renders with all variants in selected state", () => {
    const variants = ["filled", "tonal", "outlined", "standard"] as const;
    for (const variant of variants) {
      const { unmount } = render(
        <ToggleIconButton isSelected variant={variant}>★</ToggleIconButton>
      );
      expect(screen.getByRole("button")).toBeInTheDocument();
      unmount();
    }
  });

  it("forwards native button props", () => {
    render(
      <ToggleIconButton isSelected={false} aria-label="Toggle favorite">
        ★
      </ToggleIconButton>
    );
    expect(screen.getByRole("button")).toHaveAttribute("aria-label", "Toggle favorite");
  });

  it("does not fire click when disabled", async () => {
    const user = userEvent.setup({ pointerEventsCheck: 0 });
    const onClick = vi.fn();
    render(
      <ToggleIconButton isSelected={false} disabled onClick={onClick}>★</ToggleIconButton>
    );
    await user.click(screen.getByRole("button"));
    expect(onClick).not.toHaveBeenCalled();
  });
});
