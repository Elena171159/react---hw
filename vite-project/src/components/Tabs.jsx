import { Tab } from "./Tab";
export function Tabs({ items, onChange }) {
  return (
    <div className="tabs">
      {items.map((tab) => (
        <Tab key={tab.id} name={tab.name} onClick={() => onChange(tab.id)} />
      ))}
    </div>
  );
}
