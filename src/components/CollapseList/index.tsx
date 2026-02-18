import { useState, type FC } from "react";
import Collapse from "@components/collapse";
import styles from "./styles.module.css";

const transitionDelays = [150, 300, 500];

const CollapseList: FC = () => {
  const [openStates, setOpenStates] = useState<Record<string, boolean>>({});

  const toggleCollapse = (key: string) => {
    setOpenStates((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className={styles.container}>
      {/* Different transition delays */}
      <div className={styles.variantGroup}>
        <span>Collapse - Transition Delays</span>

        {transitionDelays.map((delay) => {
          const key = `delay-${delay}`;
          return (
            <div key={key} className={styles.collapseGroup}>
              <span className={styles.label}>{delay}ms transition</span>
              <button
                className={styles.toggleButton}
                onClick={() => toggleCollapse(key)}
              >
                {openStates[key] ? "Close" : "Open"}
              </button>
              <Collapse open={openStates[key] ?? false} transitionDelay={delay}>
                <div className={styles.collapseContent}>
                  <p>This collapse has a {delay}ms transition delay.</p>
                  <p>Click the button above to toggle visibility.</p>
                </div>
              </Collapse>
            </div>
          );
        })}
      </div>

      {/* Nested collapse */}
      <div className={styles.variantGroup}>
        <span>Collapse - Nested</span>

        <div className={styles.collapseGroup}>
          <span className={styles.label}>Nested collapses</span>
          <button
            className={styles.toggleButton}
            onClick={() => toggleCollapse("outer")}
          >
            {openStates["outer"] ? "Close Outer" : "Open Outer"}
          </button>
          <Collapse open={openStates["outer"] ?? false}>
            <div className={styles.collapseContent}>
              <p>This is the outer collapse content.</p>
              <button
                className={styles.toggleButton}
                onClick={() => toggleCollapse("inner")}
              >
                {openStates["inner"] ? "Close Inner" : "Open Inner"}
              </button>
              <Collapse open={openStates["inner"] ?? false}>
                <div className={styles.collapseContent}>
                  <p>This is the inner collapse content.</p>
                </div>
              </Collapse>
            </div>
          </Collapse>
        </div>
      </div>

      {/* Dynamic content */}
      <div className={styles.variantGroup}>
        <span>Collapse - Dynamic Content</span>

        <div className={styles.collapseGroup}>
          <span className={styles.label}>Content that changes height</span>
          <button
            className={styles.toggleButton}
            onClick={() => toggleCollapse("dynamic")}
          >
            {openStates["dynamic"] ? "Close" : "Open"}
          </button>
          <Collapse open={openStates["dynamic"] ?? false}>
            <DynamicContent />
          </Collapse>
        </div>
      </div>
    </div>
  );
};

const DynamicContent: FC = () => {
  const [itemCount, setItemCount] = useState(2);

  return (
    <div className={styles.collapseContent}>
      <p>Dynamic content with {itemCount} items:</p>
      <ul>
        {Array.from({ length: itemCount }, (_, i) => (
          <li key={i}>Item {i + 1}</li>
        ))}
      </ul>
      <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
        <button
          className={styles.toggleButton}
          onClick={() => setItemCount((c) => Math.max(1, c - 1))}
        >
          Remove item
        </button>
        <button
          className={styles.toggleButton}
          onClick={() => setItemCount((c) => c + 1)}
        >
          Add item
        </button>
      </div>
    </div>
  );
};

export default CollapseList;
