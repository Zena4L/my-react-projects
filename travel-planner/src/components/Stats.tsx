import React from "react";
import Item from "../interface/Interface";

interface StatsProp {
  items: Item[];
}

const Stats: React.FC<StatsProp> = ({ items }) => {
  if (!items.length)
    return <p className="stats">Start adding some stuffs 🥰 </p>;

  const numLen = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const numPercent = Math.round((numPacked / numLen) * 100);
  return (
    <footer className="stats">
      <em>
        {numPercent === 100
          ? "You got everything you need.. Enjoy your trip 😍"
          : `
        You have ${numLen} items on your list, and you already packed ${numPacked}
        (${numPercent}%)
      `}
      </em>
    </footer>
  );
};
export default Stats;
