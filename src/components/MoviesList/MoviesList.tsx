import { MovieDataType } from "../../assets/data";

interface MoviesListProps {
  recommendedList: MovieDataType[];
}

const MoviesList = ({ recommendedList }: MoviesListProps) => {
  return <div>MoviesList</div>;
};

export default MoviesList;
