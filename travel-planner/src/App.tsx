import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Form from "./components/Form";
import Stats from "./components/Stats";
import { useState } from "react";
import Item from "./interface/Interface";

function App() {
  const [items, setItems] = useState<Item[]>([]);

  const handleAddItem = (newItem: Item) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleDeleteItem = (items: Item["id"]) => {
    setItems((item) => item.filter((item) => item.id !== items));
  };

  const handleToggleItem = (items: Item["id"]) => {
    setItems((obj) =>
      obj.map((item) =>
        item.id === items ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearList = () => {
    setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
