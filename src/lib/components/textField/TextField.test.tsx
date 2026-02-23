import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TextField from "./TextField";

describe("TextField", () => {
  it("renders an input element by default", () => {
    render(<TextField />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInstanceOf(HTMLInputElement);
  });

  it("renders a textarea when multiline", () => {
    render(<TextField multiline />);
    expect(screen.getByRole("textbox")).toBeInstanceOf(HTMLTextAreaElement);
  });

  it("renders label when provided", () => {
    render(<TextField label="Username" />);
    expect(screen.getByText("Username")).toBeInTheDocument();
  });

  it("associates label with input via htmlFor", () => {
    render(<TextField label="Email" id="email-field" />);
    const label = screen.getByText("Email");
    expect(label).toHaveAttribute("for", "email-field");
  });

  it("renders helperText", () => {
    render(<TextField helperText="Enter your name" />);
    expect(screen.getByText("Enter your name")).toBeInTheDocument();
  });

  it("renders errorText instead of helperText when both provided", () => {
    render(<TextField helperText="Helper" errorText="Error!" />);
    expect(screen.getByText("Error!")).toBeInTheDocument();
    expect(screen.queryByText("Helper")).toBeNull();
  });

  it("sets aria-invalid when error is true", () => {
    render(<TextField error />);
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });

  it("sets aria-invalid when errorText is provided", () => {
    render(<TextField errorText="Something went wrong" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });

  it("sets aria-describedby when helperText is present", () => {
    render(<TextField helperText="Help" id="tf" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-describedby", "tf-helper");
  });

  it("handles disabled state", () => {
    render(<TextField disabled />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("applies disabled class", () => {
    const { container } = render(<TextField disabled />);
    expect(container.querySelector(".matkit__text-field--disabled")).toBeInTheDocument();
  });

  it("applies error class", () => {
    const { container } = render(<TextField error />);
    expect(container.querySelector(".matkit__text-field--error")).toBeInTheDocument();
  });

  it("applies focused class on focus", async () => {
    const user = userEvent.setup();
    const { container } = render(<TextField />);
    await user.click(screen.getByRole("textbox"));
    expect(container.querySelector(".matkit__text-field--focused")).toBeInTheDocument();
  });

  it("removes focused class on blur", async () => {
    const user = userEvent.setup();
    const { container } = render(<TextField />);
    const input = screen.getByRole("textbox");
    await user.click(input);
    expect(container.querySelector(".matkit__text-field--focused")).toBeInTheDocument();
    await user.tab();
    expect(container.querySelector(".matkit__text-field--focused")).toBeNull();
  });

  it("renders leading icon", () => {
    render(<TextField leadingIcon={<span data-testid="lead">🔍</span>} />);
    expect(screen.getByTestId("lead")).toBeInTheDocument();
  });

  it("renders trailing icon", () => {
    render(<TextField trailingIcon={<span data-testid="trail">✕</span>} />);
    expect(screen.getByTestId("trail")).toBeInTheDocument();
  });

  it("applies multiline class", () => {
    const { container } = render(<TextField multiline />);
    expect(container.querySelector(".matkit__text-field--multiline")).toBeInTheDocument();
  });

  it("calls onFocus and onBlur callbacks", async () => {
    const user = userEvent.setup();
    const onFocus = vi.fn();
    const onBlur = vi.fn();
    render(<TextField onFocus={onFocus} onBlur={onBlur} />);
    const input = screen.getByRole("textbox");
    await user.click(input);
    expect(onFocus).toHaveBeenCalledOnce();
    await user.tab();
    expect(onBlur).toHaveBeenCalledOnce();
  });

  it("accepts user input", async () => {
    const user = userEvent.setup();
    render(<TextField />);
    const input = screen.getByRole("textbox");
    await user.type(input, "Hello");
    expect(input).toHaveValue("Hello");
  });

  it("accepts user input in multiline mode", async () => {
    const user = userEvent.setup();
    render(<TextField multiline />);
    const textarea = screen.getByRole("textbox");
    await user.type(textarea, "Line 1");
    expect(textarea).toHaveValue("Line 1");
  });

  it("renders with different sizes", () => {
    const sizes = ["small", "medium", "large"] as const;
    for (const size of sizes) {
      const { unmount } = render(<TextField size={size} />);
      expect(screen.getByRole("textbox")).toBeInTheDocument();
      unmount();
    }
  });

  it("renders with different colors", () => {
    const colors = ["primary", "secondary", "tertiary"] as const;
    for (const color of colors) {
      const { unmount } = render(<TextField color={color} />);
      expect(screen.getByRole("textbox")).toBeInTheDocument();
      unmount();
    }
  });

  it("has display name", () => {
    expect(TextField.displayName).toBe("TextField");
  });
});
