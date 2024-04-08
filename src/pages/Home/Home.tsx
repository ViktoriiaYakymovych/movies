import { SetStateAction, useContext, useState } from "react";
import {
  Box,
  InputAdornment,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import SearchIcon from "../../assets/icons/icon-search.svg";
import { MovieDataType } from "../../assets/data";
import { MovieContext } from "../../context/movies-context";
import Layout from "../../components/Layout/Layout";
import MoviesTrendList from "../../components/MoviesTrendList/MoviesTrendList";
import MoviesList from "../../components/MoviesList/MoviesList";

const Home = () => {
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState<MovieDataType[]>([]);

  const { state } = useContext(MovieContext);
  const { movies } = state;
  const trendingList = movies.filter((movie) => movie.isTrending === true);
  const recommendedList = movies.filter((movie) => movie.isTrending !== true);

  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);
    const newList = movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchList(newList);
  };
  return (
    <Layout>
      <Box>
        <Paper
          component="form"
          sx={{
            p: 4,
            display: "flex",
            alignItems: "center",
            border: "none",
            borderRadius: "default",
            backgroundColor: "#10141f",
          }}
        >
          <InputBase
            placeholder="Search fot movies or TV series"
            value={search}
            onChange={handleSearch}
            startAdornment={
              <InputAdornment position="start">
                <img
                  src={SearchIcon}
                  alt="search icon"
                  width={20}
                  height={20}
                />
              </InputAdornment>
            }
            sx={{
              ml: 4,
              flex: 1,
              color: "white",
              border: "none",
            }}
          />
        </Paper>
      </Box>
      <Box py={4} px={4}>
        {search === "" ? (
          <Box width="100%">
            <Box width="100%">
              <Typography variant="h5" component="h1" my={8} fontWeight={400}>
                Trending
              </Typography>
              <MoviesTrendList trendingList={trendingList} />
            </Box>
            <Box width="100%">
              <Typography variant="h5" component="h1" my={8} fontWeight={400}>
                Recommended for you
              </Typography>
              <MoviesList recommendedList={recommendedList} />
            </Box>
          </Box>
        ) : (
          <Box width="100%">
            <Typography variant="h5" component="h1" my={8} fontWeight={400}>
              Found {searchList.length} results for '{search}'
            </Typography>
            <MoviesList recommendedList={searchList} />
          </Box>
        )}
      </Box>
    </Layout>
  );
};

export default Home;
