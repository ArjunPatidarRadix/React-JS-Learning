import React from "react";
import { IItems } from "../App";

export function Item({
  item,
  onRemove,
  onCheckedChange,
}: {
  item: IItems;
  onRemove: () => void;
  onCheckedChange: () => void;
}) {
  return (
    <li>
      <input type="checkbox" checked={item.packed} onChange={onCheckedChange} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={onRemove}>❌</button>
    </li>
  );
}
