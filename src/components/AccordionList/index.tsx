import { useState } from "react";
import { Accordion, AccordionItem } from "@components/accordion";
import type { AccordionColor, AccordionVariant, AccordionSize } from "@components/accordion";
import styles from "./styles.module.css";

const AccordionList = () => {
  const [controlledKeys, setControlledKeys] = useState<string[]>(["item1"]);

  const colors: AccordionColor[] = ["primary", "secondary", "tertiary", "surface"];
  const variants: AccordionVariant[] = ["filled", "outlined", "elevated"];
  const sizes: AccordionSize[] = ["small", "medium", "large"];

  return (
    <div className={styles.container}>
      {/* Basic Accordion */}
      <section className={styles.section}>
        <h3>Basic Accordion (Uncontrolled)</h3>
        <Accordion defaultExpandedKeys={["item1"]}>
          <AccordionItem itemKey="item1" title="What is Matkit?">
            Matkit is a modern React component library with a focus on developer
            experience and accessibility.
          </AccordionItem>
          <AccordionItem itemKey="item2" title="How do I install it?">
            You can install Matkit <strong>using npm or</strong> yarn: npm install matkit
          </AccordionItem>
          <AccordionItem itemKey="item3" title="Is it accessible?">
            Yes! All components are built with accessibility in mind, following
            WAI-ARIA guidelines.
          </AccordionItem>
        </Accordion>
      </section>

      {/* Controlled Accordion */}
      <section className={styles.section}>
        <h3>Controlled Accordion</h3>
        <p>Currently expanded: {controlledKeys.join(", ") || "none"}</p>
        <Accordion
          expandedKeys={controlledKeys}
          onChange={setControlledKeys}
          color="primary"
        >
          <AccordionItem itemKey="item1" title="First Item">
            This accordion is controlled. The parent component manages which
            items are expanded.
          </AccordionItem>
          <AccordionItem itemKey="item2" title="Second Item">
            Changes are reported via the onChange callback.
          </AccordionItem>
        </Accordion>
      </section>

      {/* Multiple Expansion */}
      <section className={styles.section}>
        <h3>Multiple Expansion</h3>
        <Accordion multiple color="secondary" variant="outlined">
          <AccordionItem itemKey="item1" title="Section 1">
            Multiple items can be expanded at once.
          </AccordionItem>
          <AccordionItem itemKey="item2" title="Section 2">
            Click another item without collapsing this one.
          </AccordionItem>
          <AccordionItem itemKey="item3" title="Section 3">
            All three sections can be open simultaneously.
          </AccordionItem>
        </Accordion>
      </section>

      {/* With Subtitles */}
      <section className={styles.section}>
        <h3>With Subtitles</h3>
        <Accordion color="tertiary" variant="elevated">
          <AccordionItem
            itemKey="item1"
            title="Account Settings"
            subtitle="Manage your account preferences"
          >
            Here you can update your email, password, and other account details.
          </AccordionItem>
          <AccordionItem
            itemKey="item2"
            title="Privacy Settings"
            subtitle="Control your privacy options"
          >
            Manage who can see your profile and activity.
          </AccordionItem>
          <AccordionItem
            itemKey="item3"
            title="Notifications"
            subtitle="Configure notification preferences"
          >
            Choose how and when you want to be notified.
          </AccordionItem>
        </Accordion>
      </section>

      {/* Disabled States */}
      <section className={styles.section}>
        <h3>Disabled States</h3>
        <Accordion>
          <AccordionItem itemKey="item1" title="Enabled Item">
            This item can be expanded and collapsed.
          </AccordionItem>
          <AccordionItem itemKey="item2" title="Disabled Item" disabled>
            This item is disabled and cannot be interacted with.
          </AccordionItem>
          <AccordionItem itemKey="item3" title="Another Enabled Item">
            This item works normally.
          </AccordionItem>
        </Accordion>
      </section>

      {/* Color Variants */}
      <section className={styles.section}>
        <h3>Color Variants</h3>
        <div className={styles.grid}>
          {colors.map((color) => (
            <div key={color}>
              <h4>{color}</h4>
              <Accordion color={color} defaultExpandedKeys={["item1"]}>
                <AccordionItem itemKey="item1" title="Expanded">
                  Content for {color} variant.
                </AccordionItem>
                <AccordionItem itemKey="item2" title="Collapsed">
                  More content here.
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Variants */}
      <section className={styles.section}>
        <h3>Visual Variants</h3>
        <div className={styles.grid}>
          {variants.map((variant) => (
            <div key={variant}>
              <h4>{variant}</h4>
              <Accordion variant={variant} color="primary" defaultExpandedKeys={["item1"]}>
                <AccordionItem itemKey="item1" title="First">
                  {variant} variant styling.
                </AccordionItem>
                <AccordionItem itemKey="item2" title="Second">
                  Additional content.
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Sizes */}
      <section className={styles.section}>
        <h3>Sizes</h3>
        <div className={styles.grid}>
          {sizes.map((size) => (
            <div key={size}>
              <h4>{size}</h4>
              <Accordion size={size} defaultExpandedKeys={["item1"]}>
                <AccordionItem itemKey="item1" title="Title">
                  Content in {size} size accordion.
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AccordionList;
