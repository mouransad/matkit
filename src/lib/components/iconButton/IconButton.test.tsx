import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import IconButton from "./IconButton";

describe("IconButton", () => {
  it("renders with default props", () => {
    render(<IconButton>★</IconButton>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("renders icon content", () => {
    render(
      <IconButton>
        <svg data-testid="icon" />
      </IconButton>
    );
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("applies matkit base-button class", () => {
    render(<IconButton>★</IconButton>);
    expect(screen.getByRole("button").className).toContain("matkit__base-button");
  });

  it("handles disabled state", () => {
    render(<IconButton disabled>★</IconButton>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("fires click event", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<IconButton onClick={onClick}>★</IconButton>);
    await user.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("does not fire click when disabled", async () => {
    const user = userEvent.setup({ pointerEventsCheck: 0 });
    const onClick = vi.fn();
    render(<IconButton disabled onClick={onClick}>★</IconButton>);
    await user.click(screen.getByRole("button"));
    expect(onClick).not.toHaveBeenCalled();
  });

  it("applies custom aria-label", () => {
    render(<IconButton aria-label="Close">✕</IconButton>);
    expect(screen.getByRole("button", { name: "Close" })).toBeInTheDocument();
  });

  it("renders with different sizes", () => {
    const sizes = ["xSmall", "small", "medium", "large", "xLarge"] as const;
    for (const size of sizes) {
      const { unmount } = render(<IconButton size={size}>★</IconButton>);
      expect(screen.getByRole("button")).toBeInTheDocument();
      unmount();
    }
  });

  it("renders with different variants", () => {
    const variants = ["filled", "outlined", "standard", "tonal"] as const;
    for (const variant of variants) {
      const { unmount } = render(<IconButton variant={variant}>★</IconButton>);
      expect(screen.getByRole("button")).toBeInTheDocument();
      unmount();
    }
  });

  it("renders with different widthTypes", () => {
    const widthTypes = ["regular", "narrow", "wide"] as const;
    for (const widthType of widthTypes) {
      const { unmount } = render(<IconButton widthType={widthType}>★</IconButton>);
      expect(screen.getByRole("button")).toBeInTheDocument();
      unmount();
    }
  });

  it("accepts custom style", () => {
    render(<IconButton style={{ opacity: 0.5 }}>★</IconButton>);
    expect(screen.getByRole("button").style.opacity).toBe("0.5");
  });
});
