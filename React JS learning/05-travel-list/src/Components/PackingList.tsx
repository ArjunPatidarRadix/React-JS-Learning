import React, { useState } from "react";
import { IItems } from "../App";
import { Item } from "./Item";

export function PackingList({
  packageItem,
  onRemove,
  onCheckedChange,
  onClearList,
}: {
  packageItem: IItems[];
  onRemove: (id: number) => void;
  onCheckedChange: (id: number) => void;
  onClearList: () => void;
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = packageItem;
  if (sortBy === "description")
    sortedItems = packageItem
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = packageItem
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems?.map((item, index) => {
          return (
            <Item
              key={index}
              item={item}
              onRemove={() => onRemove(item.id)}
              onCheckedChange={() => onCheckedChange(item.id)}
            />
          );
        })}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value={"input"}>Sort by input order</option>
          <option value={"description"}>Sort by description</option>
          <option value={"packed"}>Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}
