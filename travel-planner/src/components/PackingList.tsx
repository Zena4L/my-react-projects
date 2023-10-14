import List from "./List";
import Item from "../interface/Interface";
import React, { useState } from "react";

interface PackingListProps {
  items: Item[];
  onDeleteItem(items: Item["id"]): void;
  onToggleItem: (items: Item["id"]) => void;
  onClearList: () => void;
}

const PackingList: React.FC<PackingListProps> = ({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) => {
  const [sortBy, setSortBy] = useState<string>("input");

  let sortedItems: Item[];

  if (sortBy === "input") sortedItems = [...items];
  // console.log(sortedItems);
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <List
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={() => onClearList()}>Clear List</button>
      </div>
    </div>
  );
};
export default PackingList;
