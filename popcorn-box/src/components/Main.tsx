import { MovieData } from "../data";
import LeftBox from "./LeftBox";
import RightBox from "./RightBox";

interface MainProps {
  movies: MovieData[];
}

const Main: React.FC<MainProps> = ({ movies }) => {
  return (
    <main className="main">
      <LeftBox movies={movies} />

      <RightBox />
    </main>
  );
};
export default Main;
