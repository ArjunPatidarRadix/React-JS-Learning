import React, { FormEvent, useState } from "react";
import "./index.css";
import Logo from "./Components/Logo";
import Form from "./Components/Form";
import { PackingList } from "./Components/PackingList";
import { Stats } from "./Components/Stats";

export interface IItems {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}

const initialItems: IItems[] = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];
function App() {
  const [packageItem, setPackageItems] = useState<IItems[]>([]);

  const numItems = packageItem.length;

  function onAddItem(item: IItems) {
    setPackageItems((prev) => [...prev, item]);
  }

  function removeItems(id: number) {
    setPackageItems(packageItem.filter((it) => it.id !== id));
  }

  function handleCheckChange(id: number) {
    setPackageItems(
      packageItem.map((it) => {
        if (it.id === id) {
          return { ...it, packed: !it.packed };
        }
        return it;
      })
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to clear the items?"
    );
    if (confirmed) setPackageItems([]);
  }

  return (
    <div className="App">
      <Logo />
      <Form onAddItem={onAddItem} />
      <PackingList
        packageItem={packageItem}
        onRemove={removeItems}
        onCheckedChange={handleCheckChange}
        onClearList={handleClearList}
      />
      <Stats items={packageItem} />
    </div>
  );
}

export default App;
