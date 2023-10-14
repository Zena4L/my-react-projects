import React from "react";
import Item from "../interface/Interface";

interface ListProps {
  item: Item;
  onDeleteItem: (items: Item["id"]) => void;
  onToggleItem: (items: Item["id"]) => void;
}

const List: React.FC<ListProps> = ({ item, onDeleteItem, onToggleItem }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggleItem(item.id)}
      />

      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};
export default List;
