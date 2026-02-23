import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Radio from "./Radio";
import RadioGroup from "./RadioGroup";

describe("Radio", () => {
  it("renders an input of type radio", () => {
    render(<Radio value="a" />);
    expect(screen.getByRole("radio")).toBeInTheDocument();
  });

  it("renders a label when provided", () => {
    render(<Radio value="a" label="Option A" />);
    expect(screen.getByText("Option A")).toBeInTheDocument();
  });

  it("does not render label span without label prop", () => {
    const { container } = render(<Radio value="a" />);
    expect(container.querySelector(".matkit__radio__label")).toBeNull();
  });

  it("is unchecked by default (standalone)", () => {
    render(<Radio value="a" />);
    expect(screen.getByRole("radio")).not.toBeChecked();
  });

  it("can be controlled checked", () => {
    render(<Radio value="a" checked onChange={() => {}} />);
    expect(screen.getByRole("radio")).toBeChecked();
  });

  it("handles disabled state", () => {
    render(<Radio value="a" disabled />);
    expect(screen.getByRole("radio")).toBeDisabled();
  });

  it("applies disabled class", () => {
    const { container } = render(<Radio value="a" disabled />);
    expect(container.querySelector(".matkit__radio--disabled")).toBeInTheDocument();
  });

  it("fires onChange when clicked", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Radio value="a" onChange={onChange} />);
    await user.click(screen.getByRole("radio"));
    expect(onChange).toHaveBeenCalledOnce();
  });

  it("forwards name attribute", () => {
    render(<Radio value="a" name="my-radio" />);
    expect(screen.getByRole("radio")).toHaveAttribute("name", "my-radio");
  });

  it("renders with different colors", () => {
    const colors = ["primary", "secondary", "tertiary", "error"] as const;
    for (const color of colors) {
      const { unmount } = render(<Radio value="a" color={color} />);
      expect(screen.getByRole("radio")).toBeInTheDocument();
      unmount();
    }
  });

  it("renders with different sizes", () => {
    const sizes = ["small", "medium", "large"] as const;
    for (const size of sizes) {
      const { unmount } = render(<Radio value="a" size={size} />);
      expect(screen.getByRole("radio")).toBeInTheDocument();
      unmount();
    }
  });
});

describe("RadioGroup", () => {
  it("renders as a fieldset with radiogroup role", () => {
    render(
      <RadioGroup name="group">
        <Radio value="a" label="A" />
        <Radio value="b" label="B" />
      </RadioGroup>
    );
    expect(screen.getByRole("radiogroup")).toBeInTheDocument();
  });

  it("renders all radio children", () => {
    render(
      <RadioGroup name="group">
        <Radio value="a" label="A" />
        <Radio value="b" label="B" />
        <Radio value="c" label="C" />
      </RadioGroup>
    );
    expect(screen.getAllByRole("radio")).toHaveLength(3);
  });

  it("shares name across all radios", () => {
    render(
      <RadioGroup name="fruits">
        <Radio value="apple" label="Apple" />
        <Radio value="banana" label="Banana" />
      </RadioGroup>
    );
    const radios = screen.getAllByRole("radio");
    radios.forEach((radio) => {
      expect(radio).toHaveAttribute("name", "fruits");
    });
  });

  it("handles controlled value", () => {
    render(
      <RadioGroup name="group" value="b">
        <Radio value="a" label="A" />
        <Radio value="b" label="B" />
      </RadioGroup>
    );
    expect(screen.getByLabelText("A")).not.toBeChecked();
    expect(screen.getByLabelText("B")).toBeChecked();
  });

  it("handles uncontrolled with defaultValue", () => {
    render(
      <RadioGroup name="group" defaultValue="a">
        <Radio value="a" label="A" />
        <Radio value="b" label="B" />
      </RadioGroup>
    );
    expect(screen.getByLabelText("A")).toBeChecked();
    expect(screen.getByLabelText("B")).not.toBeChecked();
  });

  it("calls onChange when a radio is clicked", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <RadioGroup name="group" onChange={onChange}>
        <Radio value="a" label="A" />
        <Radio value="b" label="B" />
      </RadioGroup>
    );
    await user.click(screen.getByLabelText("B"));
    expect(onChange).toHaveBeenCalledWith("b", expect.any(Object));
  });

  it("selects radio in uncontrolled mode on click", async () => {
    const user = userEvent.setup();
    render(
      <RadioGroup name="group">
        <Radio value="a" label="A" />
        <Radio value="b" label="B" />
      </RadioGroup>
    );
    await user.click(screen.getByLabelText("B"));
    expect(screen.getByLabelText("B")).toBeChecked();
    expect(screen.getByLabelText("A")).not.toBeChecked();
  });

  it("disables all radios when group is disabled", () => {
    render(
      <RadioGroup name="group" disabled>
        <Radio value="a" label="A" />
        <Radio value="b" label="B" />
      </RadioGroup>
    );
    screen.getAllByRole("radio").forEach((radio) => {
      expect(radio).toBeDisabled();
    });
  });

  it("supports aria-label", () => {
    render(
      <RadioGroup name="group" aria-label="Choose option">
        <Radio value="a" label="A" />
      </RadioGroup>
    );
    expect(screen.getByRole("radiogroup")).toHaveAttribute("aria-label", "Choose option");
  });

  it("applies horizontal orientation class", () => {
    const { container } = render(
      <RadioGroup name="group" orientation="horizontal">
        <Radio value="a" label="A" />
      </RadioGroup>
    );
    expect(container.querySelector(".matkit__radio-group--horizontal")).toBeInTheDocument();
  });

  it("applies vertical orientation class by default", () => {
    const { container } = render(
      <RadioGroup name="group">
        <Radio value="a" label="A" />
      </RadioGroup>
    );
    expect(container.querySelector(".matkit__radio-group--vertical")).toBeInTheDocument();
  });
});
