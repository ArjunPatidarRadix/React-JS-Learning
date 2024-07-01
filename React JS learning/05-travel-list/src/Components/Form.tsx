import { FormEvent, useState } from "react";
import { IItems } from "../App";

export default function Form({
  onAddItem,
}: {
  onAddItem: (item: IItems) => void;
}) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!description) return;
    onAddItem({
      id: Date.now(),
      description: description,
      packed: false,
      quantity: quantity,
    });
    setDescription("");
    setQuantity(1);
  }

  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your 😍 trip?</h3>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((it) => {
            return (
              <option key={it} value={it}>
                {it}
              </option>
            );
          })}
        </select>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="item...."
        />
        <button>Add</button>
      </form>
    </>
  );
}
