import React, { FormEvent, useState, ChangeEvent } from "react";
import Item from "../interface/Interface";

interface FormProps {
  onAddItem: (newItem: Item) => void;
}

function Form({ onAddItem }: FormProps) {
  const [description, setDescription] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!description) return;

    const newItem: Item = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };

    onAddItem(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setQuantity(Number(e.target.value))
        }
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((e) => (
          <option value={e} key={e}>
            {e}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items"
        value={description}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setDescription(e.target.value)
        }
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
