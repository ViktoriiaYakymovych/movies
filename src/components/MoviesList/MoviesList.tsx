import { Grid, Paper } from "@mui/material";
import { MovieDataType } from "../../assets/data";
import MovieCard from "../MovieCard/MovieCard";

interface MoviesListProps {
  recommendedList: MovieDataType[];
}

const MoviesList = ({ recommendedList }: MoviesListProps) => {
  return (
    <Grid container spacing={2}>
      {recommendedList.map((movie) => (
        <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
          <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
            <MovieCard movie={movie} />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default MoviesList;
