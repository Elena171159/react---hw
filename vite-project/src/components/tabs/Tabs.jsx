import { Tab } from "./Tab";
import React from "react";
import styles from "./tabs.module.css";

export function Tabs({ items, onChange }) {
  return (
    <div className={styles.container}>
      {items.map((tab) => (
        <Tab key={tab.id} name={tab.name} onClick={() => onChange(tab.id)} />
      ))}
    </div>
  );
}
