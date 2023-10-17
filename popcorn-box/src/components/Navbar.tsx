import Search from "./Search";
import { MovieData } from "../data";

interface NavbarProps {
  movies: MovieData[];
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar: React.FC<NavbarProps> = ({ movies, query, setQuery }) => {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img" aria-label="popcorn">
          🍿
        </span>
        <h1>usePopcorn</h1>
      </div>
      <Search query={query} setQuery={setQuery} />
      <p className="num-results">
        Found <strong>{movies.length}</strong> results
      </p>
    </nav>
  );
};

export default Navbar;
