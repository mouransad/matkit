import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BaseButton from "./BaseButton";
import type { SizeConfig, ColorConfig } from "./types";

const defaultSizeConfig: SizeConfig = {
  borderRadiusStartStart: "8px",
  borderRadiusStartEnd: "8px",
  borderRadiusEndStart: "8px",
  borderRadiusEndEnd: "8px",
  height: "48px",
  fontSize: "16px",
  paddingX: "24px",
  gap: "8px",
  iconSize: "24px",
};

const defaultColorConfig: ColorConfig = {
  background: "blue",
  color: "white",
  hoverBackground: "darkblue",
  activeBackground: "navy",
  disabledBackground: "gray",
  disabledColor: "darkgray",
  borderColor: "transparent",
};

describe("BaseButton", () => {
  it("renders children", () => {
    render(
      <BaseButton sizeConfig={defaultSizeConfig} colorConfig={defaultColorConfig}>
        Click me
      </BaseButton>
    );
    expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
  });

  it("renders as a button element", () => {
    render(
      <BaseButton sizeConfig={defaultSizeConfig} colorConfig={defaultColorConfig}>
        Test
      </BaseButton>
    );
    expect(screen.getByRole("button")).toBeInstanceOf(HTMLButtonElement);
  });

  it("applies 'matkit' and 'matkit__base-button' classes", () => {
    render(
      <BaseButton sizeConfig={defaultSizeConfig} colorConfig={defaultColorConfig}>
        Test
      </BaseButton>
    );
    const button = screen.getByRole("button");
    expect(button.className).toContain("matkit");
    expect(button.className).toContain("matkit__base-button");
  });

  it("applies disabled state", () => {
    render(
      <BaseButton sizeConfig={defaultSizeConfig} colorConfig={defaultColorConfig} disabled>
        Disabled
      </BaseButton>
    );
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(button.className).toContain("matkit__base-button--disabled");
  });

  it("applies additional className", () => {
    render(
      <BaseButton sizeConfig={defaultSizeConfig} colorConfig={defaultColorConfig} className="custom">
        Test
      </BaseButton>
    );
    expect(screen.getByRole("button").className).toContain("custom");
  });

  it("sets CSS variables from sizeConfig and colorConfig", () => {
    render(
      <BaseButton sizeConfig={defaultSizeConfig} colorConfig={defaultColorConfig}>
        Test
      </BaseButton>
    );
    const button = screen.getByRole("button");
    expect(button.style.getPropertyValue("--base-button-height")).toBe("48px");
    expect(button.style.getPropertyValue("--base-button-background")).toBe("blue");
    expect(button.style.getPropertyValue("--base-button-color")).toBe("white");
    expect(button.style.getPropertyValue("--base-button-font-size")).toBe("16px");
  });

  it("merges custom style with CSS variables", () => {
    render(
      <BaseButton
        sizeConfig={defaultSizeConfig}
        colorConfig={defaultColorConfig}
        style={{ margin: "10px" }}
      >
        Test
      </BaseButton>
    );
    const button = screen.getByRole("button");
    expect(button.style.margin).toBe("10px");
    expect(button.style.getPropertyValue("--base-button-height")).toBe("48px");
  });

  it("handles click events", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <BaseButton sizeConfig={defaultSizeConfig} colorConfig={defaultColorConfig} onClick={onClick}>
        Click
      </BaseButton>
    );
    await user.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("does not fire click when disabled", async () => {
    const user = userEvent.setup({ pointerEventsCheck: 0 });
    const onClick = vi.fn();
    render(
      <BaseButton sizeConfig={defaultSizeConfig} colorConfig={defaultColorConfig} disabled onClick={onClick}>
        Click
      </BaseButton>
    );
    await user.click(screen.getByRole("button"));
    expect(onClick).not.toHaveBeenCalled();
  });

  it("forwards native button props (type, aria-label)", () => {
    render(
      <BaseButton
        sizeConfig={defaultSizeConfig}
        colorConfig={defaultColorConfig}
        type="submit"
        aria-label="Submit form"
      >
        Submit
      </BaseButton>
    );
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("type", "submit");
    expect(button).toHaveAttribute("aria-label", "Submit form");
  });
});
