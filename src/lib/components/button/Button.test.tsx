import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";
import { sizeConfigMap, getColorConfig } from "./configs";

describe("Button", () => {
  it("renders with default props", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toBeInTheDocument();
  });

  it("renders children inside a span", () => {
    render(<Button>Label</Button>);
    const button = screen.getByRole("button");
    const span = button.querySelector("span");
    expect(span).toHaveTextContent("Label");
  });

  it("renders startIcon before children", () => {
    render(
      <Button startIcon={<span data-testid="start-icon">→</span>}>
        Next
      </Button>
    );
    expect(screen.getByTestId("start-icon")).toBeInTheDocument();
    const button = screen.getByRole("button");
    const children = Array.from(button.childNodes);
    const iconIdx = children.findIndex(
      (n) => n instanceof HTMLElement && n.dataset.testid === "start-icon"
    );
    const spanIdx = children.findIndex(
      (n) => n instanceof HTMLElement && n.tagName === "SPAN" && n.textContent === "Next"
    );
    expect(iconIdx).toBeLessThan(spanIdx);
  });

  it("renders endIcon after children", () => {
    render(
      <Button endIcon={<span data-testid="end-icon">←</span>}>
        Back
      </Button>
    );
    expect(screen.getByTestId("end-icon")).toBeInTheDocument();
    const button = screen.getByRole("button");
    const children = Array.from(button.childNodes);
    const spanIdx = children.findIndex(
      (n) => n instanceof HTMLElement && n.tagName === "SPAN" && n.textContent === "Back"
    );
    const iconIdx = children.findIndex(
      (n) => n instanceof HTMLElement && n.dataset.testid === "end-icon"
    );
    expect(spanIdx).toBeLessThan(iconIdx);
  });

  it("applies round class when round=true", () => {
    render(<Button round>Round</Button>);
    const button = screen.getByRole("button");
    expect(button.className).toContain("matkit__button--round");
  });

  it("does not apply round class by default", () => {
    render(<Button>Normal</Button>);
    const button = screen.getByRole("button");
    expect(button.className).not.toContain("matkit__button--round");
  });

  it("handles disabled state", () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("fires onClick", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click</Button>);
    await user.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("renders without children (icon-only button)", () => {
    render(
      <Button startIcon={<span data-testid="icon">★</span>} />
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(screen.getByTestId("icon")).toBeInTheDocument();
    // No span wrapper should be rendered for children
    expect(button.querySelector("span:not([data-testid])")).toBeNull();
  });

  it("passes through native button props", () => {
    render(<Button type="submit" aria-label="submit">Go</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("type", "submit");
    expect(button).toHaveAttribute("aria-label", "submit");
  });
});

describe("Button configs", () => {
  it("has all 5 size configs", () => {
    expect(Object.keys(sizeConfigMap)).toEqual([
      "xSmall",
      "small",
      "medium",
      "large",
      "xLarge",
    ]);
  });

  it("each size config has required properties", () => {
    for (const key of Object.keys(sizeConfigMap) as Array<keyof typeof sizeConfigMap>) {
      const config = sizeConfigMap[key];
      expect(config).toHaveProperty("height");
      expect(config).toHaveProperty("fontSize");
      expect(config).toHaveProperty("paddingX");
      expect(config).toHaveProperty("gap");
      expect(config).toHaveProperty("iconSize");
      expect(config).toHaveProperty("borderRadiusStartStart");
    }
  });

  it("getColorConfig returns config for all variant/color combos", () => {
    const variants = ["filled", "outlined", "text", "tonal", "elevated"] as const;
    const colors = ["primary", "secondary", "tertiary", "error"] as const;
    for (const variant of variants) {
      for (const color of colors) {
        const config = getColorConfig(variant, color);
        expect(config).toHaveProperty("background");
        expect(config).toHaveProperty("color");
        expect(config).toHaveProperty("hoverBackground");
        expect(config).toHaveProperty("disabledBackground");
        expect(config).toHaveProperty("borderColor");
      }
    }
  });
});
