import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Accordion from "./Accordion";
import AccordionGroup from "./AccordionGroup";

// Mock ChevronDown icon since it's an SVG component
vi.mock("@lib/icons/ChevronDown", () => ({
  default: () => <svg data-testid="chevron-icon" />,
}));

describe("Accordion", () => {
  it("renders header content", () => {
    render(
      <Accordion header="Section 1">
        <div>Content</div>
      </Accordion>
    );
    expect(screen.getByText("Section 1")).toBeInTheDocument();
  });

  it("renders a toggle button", () => {
    render(
      <Accordion header="Section 1">
        <div>Content</div>
      </Accordion>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("is collapsed by default", () => {
    render(
      <Accordion header="Section 1">
        <div>Hidden Content</div>
      </Accordion>
    );
    expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "false");
  });

  it("respects defaultExpanded prop", () => {
    render(
      <Accordion header="Section 1" defaultExpanded>
        <div>Visible Content</div>
      </Accordion>
    );
    expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "true");
  });

  it("toggles on click (uncontrolled)", async () => {
    const user = userEvent.setup();
    render(
      <Accordion header="Section 1">
        <div>Content</div>
      </Accordion>
    );
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-expanded", "false");
    await user.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
    await user.click(button);
    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("calls onChange on toggle", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Accordion header="Section 1" onChange={onChange}>
        <div>Content</div>
      </Accordion>
    );
    await user.click(screen.getByRole("button"));
    expect(onChange).toHaveBeenCalledWith(true);
    await user.click(screen.getByRole("button"));
    expect(onChange).toHaveBeenCalledWith(false);
  });

  it("respects controlled expanded prop", () => {
    const { rerender } = render(
      <Accordion header="Section 1" expanded={false}>
        <div>Content</div>
      </Accordion>
    );
    expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "false");
    rerender(
      <Accordion header="Section 1" expanded={true}>
        <div>Content</div>
      </Accordion>
    );
    expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "true");
  });

  it("does not toggle when disabled", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Accordion header="Section 1" disabled onChange={onChange}>
        <div>Content</div>
      </Accordion>
    );
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    await user.click(button);
    expect(onChange).not.toHaveBeenCalled();
  });

  it("applies disabled class to header", () => {
    const { container } = render(
      <Accordion header="Section 1" disabled>
        <div>Content</div>
      </Accordion>
    );
    expect(container.querySelector(".matkit__accordion__header--disabled")).toBeInTheDocument();
  });

  it("renders expand icon", () => {
    render(
      <Accordion header="Section 1">
        <div>Content</div>
      </Accordion>
    );
    expect(screen.getByTestId("chevron-icon")).toBeInTheDocument();
  });

  it("renders custom expand icon", () => {
    render(
      <Accordion header="Section 1" expandIcon={<span data-testid="custom-icon">▼</span>}>
        <div>Content</div>
      </Accordion>
    );
    expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
  });

  it("renders with different sizes", () => {
    const sizes = ["small", "medium", "large"] as const;
    for (const size of sizes) {
      const { unmount } = render(
        <Accordion header="H" size={size}>Content</Accordion>
      );
      expect(screen.getByRole("button")).toBeInTheDocument();
      unmount();
    }
  });

  it("renders with different colors", () => {
    const colors = ["primary", "secondary", "error"] as const;
    for (const color of colors) {
      const { unmount } = render(
        <Accordion header="H" color={color}>Content</Accordion>
      );
      expect(screen.getByRole("button")).toBeInTheDocument();
      unmount();
    }
  });
});

describe("AccordionGroup", () => {
  it("renders all accordion children", () => {
    render(
      <AccordionGroup>
        <Accordion header="Section 1" value="s1">Content 1</Accordion>
        <Accordion header="Section 2" value="s2">Content 2</Accordion>
      </AccordionGroup>
    );
    expect(screen.getAllByRole("button")).toHaveLength(2);
  });

  it("handles uncontrolled expansion", async () => {
    const user = userEvent.setup();
    render(
      <AccordionGroup>
        <Accordion header="Section 1" value="s1">Content 1</Accordion>
        <Accordion header="Section 2" value="s2">Content 2</Accordion>
      </AccordionGroup>
    );
    const buttons = screen.getAllByRole("button");
    await user.click(buttons[0]);
    expect(buttons[0]).toHaveAttribute("aria-expanded", "true");
    expect(buttons[1]).toHaveAttribute("aria-expanded", "false");
  });

  it("supports exclusive mode (only one open at a time)", async () => {
    const user = userEvent.setup();
    render(
      <AccordionGroup exclusive>
        <Accordion header="Section 1" value="s1">Content 1</Accordion>
        <Accordion header="Section 2" value="s2">Content 2</Accordion>
      </AccordionGroup>
    );
    const buttons = screen.getAllByRole("button");
    await user.click(buttons[0]);
    expect(buttons[0]).toHaveAttribute("aria-expanded", "true");
    await user.click(buttons[1]);
    expect(buttons[0]).toHaveAttribute("aria-expanded", "false");
    expect(buttons[1]).toHaveAttribute("aria-expanded", "true");
  });

  it("supports multiple open at a time (non-exclusive)", async () => {
    const user = userEvent.setup();
    render(
      <AccordionGroup>
        <Accordion header="Section 1" value="s1">Content 1</Accordion>
        <Accordion header="Section 2" value="s2">Content 2</Accordion>
      </AccordionGroup>
    );
    const buttons = screen.getAllByRole("button");
    await user.click(buttons[0]);
    await user.click(buttons[1]);
    expect(buttons[0]).toHaveAttribute("aria-expanded", "true");
    expect(buttons[1]).toHaveAttribute("aria-expanded", "true");
  });

  it("supports defaultExpanded", () => {
    render(
      <AccordionGroup defaultExpanded="s2">
        <Accordion header="Section 1" value="s1">Content 1</Accordion>
        <Accordion header="Section 2" value="s2">Content 2</Accordion>
      </AccordionGroup>
    );
    const buttons = screen.getAllByRole("button");
    expect(buttons[0]).toHaveAttribute("aria-expanded", "false");
    expect(buttons[1]).toHaveAttribute("aria-expanded", "true");
  });

  it("supports defaultExpanded with array", () => {
    render(
      <AccordionGroup defaultExpanded={["s1", "s2"]}>
        <Accordion header="Section 1" value="s1">Content 1</Accordion>
        <Accordion header="Section 2" value="s2">Content 2</Accordion>
      </AccordionGroup>
    );
    const buttons = screen.getAllByRole("button");
    expect(buttons[0]).toHaveAttribute("aria-expanded", "true");
    expect(buttons[1]).toHaveAttribute("aria-expanded", "true");
  });

  it("calls onChange when accordion is toggled", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <AccordionGroup onChange={onChange}>
        <Accordion header="Section 1" value="s1">Content 1</Accordion>
        <Accordion header="Section 2" value="s2">Content 2</Accordion>
      </AccordionGroup>
    );
    await user.click(screen.getAllByRole("button")[0]);
    expect(onChange).toHaveBeenCalledWith(["s1"]);
  });

  it("calls onChange with string in exclusive mode", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <AccordionGroup exclusive onChange={onChange}>
        <Accordion header="Section 1" value="s1">Content 1</Accordion>
        <Accordion header="Section 2" value="s2">Content 2</Accordion>
      </AccordionGroup>
    );
    await user.click(screen.getAllByRole("button")[0]);
    expect(onChange).toHaveBeenCalledWith("s1");
  });

  it("supports controlled expanded prop", () => {
    const { rerender } = render(
      <AccordionGroup expanded="s1">
        <Accordion header="Section 1" value="s1">Content 1</Accordion>
        <Accordion header="Section 2" value="s2">Content 2</Accordion>
      </AccordionGroup>
    );
    const buttons = screen.getAllByRole("button");
    expect(buttons[0]).toHaveAttribute("aria-expanded", "true");
    expect(buttons[1]).toHaveAttribute("aria-expanded", "false");

    rerender(
      <AccordionGroup expanded="s2">
        <Accordion header="Section 1" value="s1">Content 1</Accordion>
        <Accordion header="Section 2" value="s2">Content 2</Accordion>
      </AccordionGroup>
    );
    expect(buttons[0]).toHaveAttribute("aria-expanded", "false");
    expect(buttons[1]).toHaveAttribute("aria-expanded", "true");
  });

  it("applies className", () => {
    const { container } = render(
      <AccordionGroup className="custom-group">
        <Accordion header="H" value="v">C</Accordion>
      </AccordionGroup>
    );
    expect(container.querySelector(".custom-group")).toBeInTheDocument();
  });
});
