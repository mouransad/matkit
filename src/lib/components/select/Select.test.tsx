import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Select } from "./Select";
import { Option } from "./Option";
import { OptionGroup } from "./OptionGroup";

describe("Select", () => {
  it("renders a trigger button", () => {
    render(
      <Select label="Fruit">
        <Option value="apple">Apple</Option>
        <Option value="banana">Banana</Option>
      </Select>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("renders label", () => {
    render(
      <Select label="Fruit">
        <Option value="apple">Apple</Option>
      </Select>
    );
    expect(screen.getByText("Fruit")).toBeInTheDocument();
  });

  it("shows placeholder when no value selected", () => {
    render(
      <Select placeholder="Choose...">
        <Option value="a">A</Option>
      </Select>
    );
    expect(screen.getByText("Choose...")).toBeInTheDocument();
  });

  it("shows default placeholder when none provided", () => {
    render(
      <Select>
        <Option value="a">A</Option>
      </Select>
    );
    expect(screen.getByText("Select...")).toBeInTheDocument();
  });

  it("shows selected value label", () => {
    render(
      <Select value="apple">
        <Option value="apple">Apple</Option>
        <Option value="banana">Banana</Option>
      </Select>
    );
    expect(screen.getByText("Apple")).toBeInTheDocument();
  });

  it("opens dropdown on click", async () => {
    const user = userEvent.setup();
    render(
      <Select>
        <Option value="a">Alpha</Option>
        <Option value="b">Beta</Option>
      </Select>
    );
    await user.click(screen.getByRole("button"));
    expect(screen.getByRole("listbox")).toBeInTheDocument();
  });

  it("renders options in dropdown", async () => {
    const user = userEvent.setup();
    render(
      <Select>
        <Option value="a">Alpha</Option>
        <Option value="b">Beta</Option>
      </Select>
    );
    await user.click(screen.getByRole("button"));
    expect(screen.getAllByRole("option")).toHaveLength(2);
  });

  it("closes dropdown after selecting an option", async () => {
    const user = userEvent.setup();
    render(
      <Select>
        <Option value="a">Alpha</Option>
        <Option value="b">Beta</Option>
      </Select>
    );
    await user.click(screen.getByRole("button"));
    await user.click(screen.getByText("Alpha"));
    expect(screen.queryByRole("listbox")).toBeNull();
  });

  it("calls onChange when an option is selected (uncontrolled)", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Select onChange={onChange}>
        <Option value="a">Alpha</Option>
        <Option value="b">Beta</Option>
      </Select>
    );
    await user.click(screen.getByRole("button"));
    await user.click(screen.getByText("Beta"));
    expect(onChange).toHaveBeenCalledWith("b");
  });

  it("updates displayed value in uncontrolled mode", async () => {
    const user = userEvent.setup();
    render(
      <Select>
        <Option value="a">Alpha</Option>
        <Option value="b">Beta</Option>
      </Select>
    );
    await user.click(screen.getByRole("button"));
    await user.click(screen.getByText("Beta"));
    expect(screen.getByText("Beta")).toBeInTheDocument();
  });

  it("respects defaultValue", () => {
    render(
      <Select defaultValue="b">
        <Option value="a">Alpha</Option>
        <Option value="b">Beta</Option>
      </Select>
    );
    expect(screen.getByText("Beta")).toBeInTheDocument();
  });

  it("handles disabled state", async () => {
    const user = userEvent.setup();
    render(
      <Select disabled>
        <Option value="a">Alpha</Option>
      </Select>
    );
    expect(screen.getByRole("button")).toBeDisabled();
    await user.click(screen.getByRole("button"));
    expect(screen.queryByRole("listbox")).toBeNull();
  });

  it("renders helper text", () => {
    render(
      <Select helperText="Pick one">
        <Option value="a">A</Option>
      </Select>
    );
    expect(screen.getByText("Pick one")).toBeInTheDocument();
  });

  it("renders error text over helper text", () => {
    render(
      <Select helperText="Pick one" errorText="Required">
        <Option value="a">A</Option>
      </Select>
    );
    expect(screen.getByText("Required")).toBeInTheDocument();
    expect(screen.queryByText("Pick one")).toBeNull();
  });

  it("applies error class", () => {
    const { container } = render(
      <Select error>
        <Option value="a">A</Option>
      </Select>
    );
    expect(container.querySelector(".matkit__select--error")).toBeInTheDocument();
  });

  it("applies disabled class", () => {
    const { container } = render(
      <Select disabled>
        <Option value="a">A</Option>
      </Select>
    );
    expect(container.querySelector(".matkit__select--disabled")).toBeInTheDocument();
  });

  it("renders leading icon", () => {
    render(
      <Select leadingIcon={<span data-testid="lead">🔍</span>}>
        <Option value="a">A</Option>
      </Select>
    );
    expect(screen.getByTestId("lead")).toBeInTheDocument();
  });

  it("closes dropdown on Escape key", async () => {
    const user = userEvent.setup();
    render(
      <Select>
        <Option value="a">Alpha</Option>
      </Select>
    );
    await user.click(screen.getByRole("button"));
    expect(screen.getByRole("listbox")).toBeInTheDocument();
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("listbox")).toBeNull();
  });

  it("supports keyboard navigation with ArrowDown", async () => {
    const user = userEvent.setup();
    render(
      <Select>
        <Option value="a">Alpha</Option>
        <Option value="b">Beta</Option>
      </Select>
    );
    await user.click(screen.getByRole("button"));
    await user.keyboard("{ArrowDown}");
    // Should highlight next option — doesn't crash
    expect(screen.getByRole("listbox")).toBeInTheDocument();
  });

  it("selects highlighted option with Enter", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Select onChange={onChange}>
        <Option value="a">Alpha</Option>
        <Option value="b">Beta</Option>
      </Select>
    );
    const trigger = screen.getByRole("button");
    await user.click(trigger);
    await user.keyboard("{ArrowDown}");
    await user.keyboard("{Enter}");
    expect(onChange).toHaveBeenCalled();
  });

  it("has aria-haspopup on trigger", () => {
    render(
      <Select>
        <Option value="a">A</Option>
      </Select>
    );
    expect(screen.getByRole("button")).toHaveAttribute("aria-haspopup", "listbox");
  });

  it("sets aria-expanded on trigger", async () => {
    const user = userEvent.setup();
    render(
      <Select>
        <Option value="a">A</Option>
      </Select>
    );
    const trigger = screen.getByRole("button");
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    await user.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
  });

  it("has display name", () => {
    expect(Select.displayName).toBe("Select");
  });
});

describe("Option", () => {
  it("renders with correct role", async () => {
    const user = userEvent.setup();
    render(
      <Select>
        <Option value="a">Alpha</Option>
      </Select>
    );
    await user.click(screen.getByRole("button"));
    expect(screen.getByRole("option")).toBeInTheDocument();
  });

  it("marks selected option with aria-selected", async () => {
    const user = userEvent.setup();
    render(
      <Select value="a">
        <Option value="a">Alpha</Option>
        <Option value="b">Beta</Option>
      </Select>
    );
    await user.click(screen.getByRole("button"));
    const options = screen.getAllByRole("option");
    expect(options[0]).toHaveAttribute("aria-selected", "true");
    expect(options[1]).toHaveAttribute("aria-selected", "false");
  });

  it("marks disabled option with aria-disabled", async () => {
    const user = userEvent.setup();
    render(
      <Select>
        <Option value="a" disabled>Alpha</Option>
      </Select>
    );
    await user.click(screen.getByRole("button"));
    expect(screen.getByRole("option")).toHaveAttribute("aria-disabled", "true");
  });

  it("has displayName", () => {
    expect(Option.displayName).toBe("Option");
  });

  it("throws when used outside Select", () => {
    expect(() => render(<Option value="a">A</Option>)).toThrow(
      "Option must be used within a Select component"
    );
  });
});

describe("OptionGroup", () => {
  it("renders with group role", async () => {
    const user = userEvent.setup();
    render(
      <Select>
        <OptionGroup label="Fruits">
          <Option value="apple">Apple</Option>
        </OptionGroup>
      </Select>
    );
    await user.click(screen.getByRole("button"));
    expect(screen.getByRole("group")).toBeInTheDocument();
  });

  it("renders group label", async () => {
    const user = userEvent.setup();
    render(
      <Select>
        <OptionGroup label="Fruits">
          <Option value="apple">Apple</Option>
        </OptionGroup>
      </Select>
    );
    await user.click(screen.getByRole("button"));
    expect(screen.getByText("Fruits")).toBeInTheDocument();
  });

  it("sets aria-label on group", async () => {
    const user = userEvent.setup();
    render(
      <Select>
        <OptionGroup label="Fruits">
          <Option value="apple">Apple</Option>
        </OptionGroup>
      </Select>
    );
    await user.click(screen.getByRole("button"));
    expect(screen.getByRole("group")).toHaveAttribute("aria-label", "Fruits");
  });

  it("has displayName", () => {
    expect(OptionGroup.displayName).toBe("OptionGroup");
  });
});
