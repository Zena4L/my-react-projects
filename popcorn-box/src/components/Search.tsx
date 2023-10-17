interface serachProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}
const Search: React.FC<serachProps> = ({ query, setQuery }) => {
  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;
