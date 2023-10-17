import { useState } from "react";

import { tempWatchedData } from "../data";
import Summary from "./Summary";
import List from "./List";

const RightBox = () => {
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <Summary watched={watched} />
          <List watched={watched} />
        </>
      )}
    </div>
  );
};

export default RightBox;
