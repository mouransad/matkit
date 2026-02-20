import { useState, type FC } from "react";
import { Accordion, AccordionGroup } from "@components/accordion";
import styles from "./styles.module.css";

const sizes = ["small", "medium", "large"] as const;
const colors = ["primary", "secondary", "error"] as const;

const ChevronRight = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const PlusIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

const AccordionList: FC = () => {
  const [controlledExpanded, setControlledExpanded] = useState(false);
  const [exclusiveExpanded, setExclusiveExpanded] = useState<string>("");
  const [multiExpanded, setMultiExpanded] = useState<string[]>(["multi-1"]);

  return (
    <div className={styles.container}>
      {/* All Sizes */}
      <div className={styles.variantGroup}>
        <span>Sizes</span>
        <div className={styles.row}>
          {sizes.map((size) => (
            <Accordion key={size} header={`${size.charAt(0).toUpperCase() + size.slice(1)} Size`} size={size}>
              <p className={styles.accordionContent}>
                This accordion uses the <strong>{size}</strong> size configuration.
              </p>
            </Accordion>
          ))}
        </div>
      </div>

      {/* All Colors */}
      <div className={styles.variantGroup}>
        <span>Colors</span>
        <div className={styles.row}>
          {colors.map((color) => (
            <Accordion key={color} header={`${color.charAt(0).toUpperCase() + color.slice(1)} Color`} color={color}>
              <p className={styles.accordionContent}>
                This accordion uses the <strong>{color}</strong> color scheme.
              </p>
            </Accordion>
          ))}
        </div>
      </div>

      {/* All Size + Color Combinations */}
      <div className={styles.variantGroup}>
        <span>All Size + Color Combinations</span>
        {sizes.map((size) => (
          <div key={size} className={styles.row}>
            {colors.map((color) => (
              <Accordion
                key={`${size}-${color}`}
                header={`${size} + ${color}`}
                size={size}
                color={color}
              >
                <p className={styles.accordionContent}>
                  Size: {size}, Color: {color}
                </p>
              </Accordion>
            ))}
          </div>
        ))}
      </div>

      {/* Controlled Accordion */}
      <div className={styles.variantGroup}>
        <span>Controlled Accordion</span>
        <span className={styles.label}>
          State: {controlledExpanded ? "Expanded" : "Collapsed"}
        </span>
        <Accordion
          header="Controlled Accordion"
          expanded={controlledExpanded}
          onChange={setControlledExpanded}
        >
          <p className={styles.accordionContent}>
            This accordion's state is controlled externally via the <code>expanded</code> and <code>onChange</code> props.
          </p>
        </Accordion>
        <button
          className={styles.button}
          onClick={() => setControlledExpanded(!controlledExpanded)}
        >
          Toggle from outside
        </button>
      </div>

      {/* Default Expanded */}
      <div className={styles.variantGroup}>
        <span>Default Expanded</span>
        <Accordion header="I start expanded!" defaultExpanded>
          <p className={styles.accordionContent}>
            This accordion uses <code>defaultExpanded</code> to start in the expanded state (uncontrolled).
          </p>
        </Accordion>
      </div>

      {/* Disabled States */}
      <div className={styles.variantGroup}>
        <span>Disabled States</span>
        <div className={styles.row}>
          {colors.map((color) => (
            <Accordion key={color} header={`Disabled ${color}`} disabled color={color}>
              <p className={styles.accordionContent}>
                This content should not be visible.
              </p>
            </Accordion>
          ))}
        </div>
      </div>

      {/* Custom Transition Delays */}
      <div className={styles.variantGroup}>
        <span>Custom Transition Delays</span>
        <div className={styles.row}>
          <Accordion header="Fast (100ms)" transitionDelay={100}>
            <p className={styles.accordionContent}>100ms transition</p>
          </Accordion>
          <Accordion header="Default (300ms)" transitionDelay={300}>
            <p className={styles.accordionContent}>300ms transition (default)</p>
          </Accordion>
          <Accordion header="Slow (600ms)" transitionDelay={600}>
            <p className={styles.accordionContent}>600ms transition</p>
          </Accordion>
        </div>
      </div>

      {/* Custom Expand Icons */}
      <div className={styles.variantGroup}>
        <span>Custom Expand Icons</span>
        <div className={styles.row}>
          <Accordion header="Chevron Right Icon" expandIcon={<ChevronRight />}>
            <p className={styles.accordionContent}>
              Uses a custom chevron-right icon that rotates on expand.
            </p>
          </Accordion>
          <Accordion header="Plus Icon" expandIcon={<PlusIcon />}>
            <p className={styles.accordionContent}>
              Uses a custom plus icon.
            </p>
          </Accordion>
        </div>
      </div>

      {/* Custom sizeConfig Override */}
      <div className={styles.variantGroup}>
        <span>Custom sizeConfig Override</span>
        <Accordion
          header="Custom Padding & Font"
          sizeConfig={{
            headerPadding: "24px 32px",
            contentPadding: "0 32px 24px",
            headerFontSize: "20px",
            contentFontSize: "16px",
            iconSize: "32px",
            borderRadius: "var(--border-radius-extra-large)",
          }}
        >
          <p className={styles.accordionContent}>
            This accordion overrides specific size config values: larger padding, custom font sizes, bigger icon, and extra-large border radius.
          </p>
        </Accordion>
      </div>

      {/* Custom colorConfig Override */}
      <div className={styles.variantGroup}>
        <span>Custom colorConfig Override</span>
        <Accordion
          header="Custom Colors"
          colorConfig={{
            headerBackground: "linear-gradient(135deg, rgb(var(--rgb-primary)), rgb(var(--rgb-tertiary)))",
            headerColor: "rgb(var(--rgb-on-primary))",
            iconColor: "rgb(var(--rgb-on-primary))",
            contentBackground: "rgb(var(--rgb-surface-container-highest))",
          }}
        >
          <p className={styles.accordionContent}>
            This accordion uses a custom gradient header background and custom content background color.
          </p>
        </Accordion>
      </div>

      {/* slotProps Customization */}
      <div className={styles.variantGroup}>
        <span>slotProps Customization</span>
        <Accordion
          header="Custom Slot Props"
          slotProps={{
            root: {
              style: { boxShadow: "var(--elevation-3)" },
            },
            header: {
              style: { fontStyle: "italic" },
            },
            content: {
              style: { backgroundColor: "rgb(var(--rgb-tertiary-container))", color: "rgb(var(--rgb-on-tertiary-container))" },
            },
            icon: {
              style: { color: "rgb(var(--rgb-tertiary))" },
            },
          }}
        >
          <p className={styles.accordionContent}>
            This accordion uses slotProps to add elevation shadow, italic header, and tertiary-colored content area.
          </p>
        </Accordion>
      </div>

      {/* AccordionGroup - Non-exclusive (Uncontrolled) */}
      <div className={styles.variantGroup}>
        <span>AccordionGroup - Non-exclusive (Uncontrolled)</span>
        <AccordionGroup defaultExpanded={["item1"]}>
          <Accordion value="item1" header="Item 1">
            <p className={styles.accordionContent}>
              Multiple items can be open. This one starts expanded via <code>defaultExpanded</code>.
            </p>
          </Accordion>
          <Accordion value="item2" header="Item 2">
            <p className={styles.accordionContent}>
              Open this without closing Item 1.
            </p>
          </Accordion>
          <Accordion value="item3" header="Item 3">
            <p className={styles.accordionContent}>
              All three can be expanded simultaneously.
            </p>
          </Accordion>
        </AccordionGroup>
      </div>

      {/* AccordionGroup - Non-exclusive (Controlled) */}
      <div className={styles.variantGroup}>
        <span>AccordionGroup - Non-exclusive (Controlled)</span>
        <span className={styles.label}>
          Expanded: [{multiExpanded.join(", ")}]
        </span>
        <AccordionGroup
          expanded={multiExpanded}
          onChange={(val) => setMultiExpanded(val as string[])}
        >
          <Accordion value="multi-1" header="Multi 1" color="secondary">
            <p className={styles.accordionContent}>Controlled multi-expand panel 1</p>
          </Accordion>
          <Accordion value="multi-2" header="Multi 2" color="secondary">
            <p className={styles.accordionContent}>Controlled multi-expand panel 2</p>
          </Accordion>
          <Accordion value="multi-3" header="Multi 3" color="secondary">
            <p className={styles.accordionContent}>Controlled multi-expand panel 3</p>
          </Accordion>
        </AccordionGroup>
      </div>

      {/* AccordionGroup - Exclusive (Controlled) */}
      <div className={styles.variantGroup}>
        <span>AccordionGroup - Exclusive (Controlled)</span>
        <span className={styles.label}>
          Currently expanded: {exclusiveExpanded || "None"}
        </span>
        <AccordionGroup
          exclusive
          expanded={exclusiveExpanded}
          onChange={(val) => setExclusiveExpanded(val as string)}
        >
          <Accordion value="exc-1" header="Section 1">
            <p className={styles.accordionContent}>
              Opening another section will close this one automatically.
            </p>
          </Accordion>
          <Accordion value="exc-2" header="Section 2">
            <p className={styles.accordionContent}>
              Only one section can be open at a time in exclusive mode.
            </p>
          </Accordion>
          <Accordion value="exc-3" header="Section 3">
            <p className={styles.accordionContent}>
              Classic accordion behavior.
            </p>
          </Accordion>
        </AccordionGroup>
      </div>

      {/* AccordionGroup with Mixed Colors */}
      <div className={styles.variantGroup}>
        <span>AccordionGroup with Mixed Colors</span>
        <AccordionGroup>
          <Accordion value="color-1" header="Primary Panel" color="primary">
            <p className={styles.accordionContent}>Primary colored panel in a group.</p>
          </Accordion>
          <Accordion value="color-2" header="Secondary Panel" color="secondary">
            <p className={styles.accordionContent}>Secondary colored panel in a group.</p>
          </Accordion>
          <Accordion value="color-3" header="Error Panel" color="error">
            <p className={styles.accordionContent}>Error colored panel in a group.</p>
          </Accordion>
        </AccordionGroup>
      </div>

      {/* AccordionGroup with Large Size */}
      <div className={styles.variantGroup}>
        <span>AccordionGroup with Large Size</span>
        <AccordionGroup exclusive defaultExpanded="large-1">
          <Accordion value="large-1" header="Large Panel 1" size="large" color="secondary">
            <p className={styles.accordionContent}>Large size accordion in a group.</p>
          </Accordion>
          <Accordion value="large-2" header="Large Panel 2" size="large" color="secondary">
            <p className={styles.accordionContent}>Large size accordion in a group.</p>
          </Accordion>
        </AccordionGroup>
      </div>

      {/* AccordionGroup with Small Size */}
      <div className={styles.variantGroup}>
        <span>AccordionGroup with Small Size</span>
        <AccordionGroup>
          <Accordion value="small-1" header="Small Panel 1" size="small">
            <p className={styles.accordionContent}>Small size accordion in a group.</p>
          </Accordion>
          <Accordion value="small-2" header="Small Panel 2" size="small">
            <p className={styles.accordionContent}>Small size accordion in a group.</p>
          </Accordion>
          <Accordion value="small-3" header="Small Panel 3" size="small">
            <p className={styles.accordionContent}>Small size accordion in a group.</p>
          </Accordion>
        </AccordionGroup>
      </div>

      {/* Nested Accordions */}
      <div className={styles.variantGroup}>
        <span>Nested Accordions</span>
        <Accordion header="Outer Accordion (Large Primary)" color="primary" size="large">
          <p className={styles.accordionContent}>
            This is the outer accordion content. It contains a nested accordion below.
          </p>
          <Accordion header="Inner Accordion (Medium Secondary)" color="secondary" size="medium">
            <p className={styles.accordionContent}>
              This is a nested accordion. It can also contain another level.
            </p>
            <Accordion header="Deepest Accordion (Small Error)" color="error" size="small">
              <p className={styles.accordionContent}>
                Three levels deep!
              </p>
            </Accordion>
          </Accordion>
        </Accordion>
      </div>

      {/* Complex Content */}
      <div className={styles.variantGroup}>
        <span>Complex Content</span>
        <Accordion header="Accordion with Complex Content" size="large">
          <div className={styles.complexContent}>
            <h3>Rich Content Example</h3>
            <p>Accordions can contain any React content:</p>
            <ul>
              <li>Lists and nested elements</li>
              <li>Images and media</li>
              <li>Forms and inputs</li>
              <li>Other components</li>
            </ul>
            <div className={styles.inlineButtons}>
              <button className={styles.button}>Action 1</button>
              <button className={styles.button}>Action 2</button>
            </div>
          </div>
        </Accordion>
      </div>

      {/* className Prop */}
      <div className={styles.variantGroup}>
        <span>className Prop</span>
        <Accordion header="Custom className" className={styles.customAccordion}>
          <p className={styles.accordionContent}>
            This accordion has a custom className applied via the <code>className</code> prop.
          </p>
        </Accordion>
      </div>
    </div>
  );
};

export default AccordionList;
