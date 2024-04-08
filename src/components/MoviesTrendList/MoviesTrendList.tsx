import { Grid, Paper } from "@mui/material";
import { MovieDataType } from "../../assets/data";
import MovieTrendCard from "../MovieCard/MovieTrendCard";

interface MoviesTrendListProps {
  trendingList: MovieDataType[];
}

const MoviesTrendList = ({ trendingList }: MoviesTrendListProps) => {
  return (
    <Grid container spacing={2}>
      {trendingList.map((movie) => (
        <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
          <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
            <MovieTrendCard movie={movie} />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default MoviesTrendList;
