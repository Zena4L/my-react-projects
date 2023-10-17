import React from "react";

import ListItems from "./ListItems";

interface ListProp {
  watched: {
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
    runtime: number;
    imdbRating: number;
    userRating: number;
  }[];
}

const List: React.FC<ListProp> = ({ watched }) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <ListItems movie={movie} key={movie.Year} />
      ))}
    </ul>
  );
};

export default List;
