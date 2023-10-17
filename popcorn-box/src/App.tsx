import React, { useEffect, useState } from "react";

// import { tempMovieData, MovieData } from "./data";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

const key = "608d2c7f";

const App: React.FC = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState<string>("");

  // const query = "coco";

  useEffect(
    function () {
      async function fetchMovies() {
        try {
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${key}&s=${query}`
          );

          if (!res.ok)
            throw new Error("Something went wrong with feteching movies");
          const data = await res.json();
          if (data.Response === "False") throw new Error("No movie found");
          setMovies(data.Search);
        } catch (error) {
          console.log(error);
        }

        if (!query.length) {
          setMovies([]);
        }
      }
      fetchMovies();
    },
    [query]
  );

  return (
    <>
      <Navbar movies={movies} query={query} setQuery={setQuery} />
      <Main movies={movies} />
    </>
  );
};

export default App;
