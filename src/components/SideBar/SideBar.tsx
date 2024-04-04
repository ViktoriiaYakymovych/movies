import { Link, useLocation } from "react-router-dom";
import { Box, Hidden, Typography } from "@mui/material";
import homeIcon from "../../assets/icons/icon-nav-home.svg";
import movieIcon from "../../assets/icons/icon-nav-movies.svg";
import tvSeriesIcon from "../../assets/icons/icon-nav-tv-series.svg";
import bookmarkIcon from "../../assets/icons/icon-nav-bookmark.svg";

const navLinks = [
  {
    name: "Home",
    icon: homeIcon,
    link: "/",
  },
  {
    name: "Movies",
    icon: movieIcon,
    link: "/movies",
  },
  {
    name: "Tv Series",
    icon: tvSeriesIcon,
    link: "/tv-series",
  },
  {
    name: "Bookmarks",
    icon: bookmarkIcon,
    link: "/bookmarks",
  },
];

const SideBar = () => {
  const { pathname } = useLocation();
  return (
    <Box
      sx={{
        width: {
          sm: "100%",
          lg: 200,
        },
        padding: 4,
        display: "flex",
        flexDirection: {
          xs: "row",
          lg: "column",
        },
        alignItems: "center",
        justifyContent: "space-between",

        backgroundColor: "#161d2f",
        borderRadius: 4,
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          gap: 4,
          flexDirection: {
            xs: "row",
            lg: "column",
          },
          alignItems: {
            xs: "center",
            lg: "start",
          },
        }}
      >
        <Hidden smDown>
          <Typography
            variant="h5"
            component="h1"
            my={2}
            fontWeight={400}
            fontSize={18}
          >
            Movies App
          </Typography>
        </Hidden>
        <Box
          sx={{
            py: {
              xs: "0px",
              lg: "16px",
            },
            display: "flex",
            gap: 4,
            flexDirection: {
              xs: "row",
              lg: "column",
            },
          }}
        >
          {navLinks.map((navLink) => (
            <Link
              key={navLink.name}
              to={navLink.link}
              style={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: 4,
                  alignItems: "center",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <img
                  src={`${navLink.icon}`}
                  alt={navLink.name}
                  style={{
                    width: "18px",
                    filter: `${
                      pathname === navLink.link
                        ? "invert(58%) sepia(14%) saturate(3166%) hue-rotate(215deg) brightness(91%) contrast(87%)"
                        : "invert(84%)"
                    }`,
                  }}
                />
                <Hidden mdDown>
                  <Typography>{navLink.name}</Typography>
                </Hidden>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
