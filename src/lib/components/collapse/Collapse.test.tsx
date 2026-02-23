import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Collapse from "./Collapse";

describe("Collapse", () => {
  it("renders children when open", () => {
    render(
      <Collapse open>
        <div>Content</div>
      </Collapse>,
    );
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("does not render when closed", () => {
    render(
      <Collapse open={false}>
        <div>Content</div>
      </Collapse>,
    );
    expect(screen.queryByText("Content")).toBeNull();
  });

  it("applies open class when open", () => {
    const { container } = render(
      <Collapse open>
        <div>Content</div>
      </Collapse>,
    );
    expect(
      container.querySelector(".matkit__collapse__wrapper--open"),
    ).toBeInTheDocument();
  });

  it("sets transition delay CSS variable", () => {
    const { container } = render(
      <Collapse open transitionDelay={500}>
        <div>Content</div>
      </Collapse>,
    );
    const wrapper = container.querySelector(
      ".matkit__collapse__wrapper",
    ) as HTMLElement;
    expect(wrapper.style.getPropertyValue("--collapse-transition-delay")).toBe(
      "500ms",
    );
  });

  it("uses default transition delay of 300ms", () => {
    const { container } = render(
      <Collapse open>
        <div>Content</div>
      </Collapse>,
    );
    const wrapper = container.querySelector(
      ".matkit__collapse__wrapper",
    ) as HTMLElement;
    expect(wrapper.style.getPropertyValue("--collapse-transition-delay")).toBe(
      "300ms",
    );
  });

  it("applies custom className", () => {
    const { container } = render(
      <Collapse open className="custom">
        <div>Content</div>
      </Collapse>,
    );
    const wrapper = container.querySelector(".matkit__collapse__wrapper");
    expect(wrapper?.className).toContain("custom");
  });

  it("renders contents inside contents wrapper", () => {
    const { container } = render(
      <Collapse open>
        <div data-testid="inner">Inner</div>
      </Collapse>,
    );
    const contents = container.querySelector(".matkit__collapse__contents");
    expect(contents).toBeInTheDocument();
    expect(screen.getByTestId("inner").parentElement?.className).toContain(
      "matkit__collapse__contents",
    );
  });

  it("passes slotProps to root element", () => {
    const { container } = render(
      <Collapse open slotProps={{ root: { className: "custom-root" } }}>
        <div>Content</div>
      </Collapse>,
    );
    expect(container.querySelector(".custom-root")).toBeInTheDocument();
  });

  it("passes slotProps to content element", () => {
    const { container } = render(
      <Collapse open slotProps={{ content: { className: "custom-content" } }}>
        <div>Content</div>
      </Collapse>,
    );
    expect(container.querySelector(".custom-content")).toBeInTheDocument();
  });
});
