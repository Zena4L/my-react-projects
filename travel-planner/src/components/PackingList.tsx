import List from "./List";
import Item from "../interface/Interface";
import React from "react";

interface PackingListProps {
  items: Item[];
  onDeleteItem(items: Item["id"]): void;
  onToggleItem: (items: Item["id"]) => void;
}

const PackingList: React.FC<PackingListProps> = ({
  items,
  onDeleteItem,
  onToggleItem,
}) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <List
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
    </div>
  );
};
export default PackingList;
