import { Tab } from "./Tab";
import "./Tab.css"
export function Tabs({ items, onChange }) {
  return (
    <div className="container">
      {items.map((tab) => (
        <Tab key={tab.id} name={tab.name} onClick={() => onChange(tab.id)} />
      ))}
    </div>
  );
}
