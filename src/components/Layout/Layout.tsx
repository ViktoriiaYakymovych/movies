import { ReactNode } from "react";
import { Box } from "@mui/material";
import SideBar from "../SideBar/SideBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={{
        height: "100vh",
        padding: 4,
        display: "flex",
        gap: 4,
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        color: "white",
        backgroundColor: "#10141F",
        overflowY: "hidden",
      }}
    >
      <SideBar />
      <Box sx={{ width: "100%", overflow: "scroll" }}>{children}</Box>
    </Box>
  );
};

export default Layout;
