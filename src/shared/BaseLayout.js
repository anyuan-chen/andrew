import Navbar from "../navbar/Navbar";
import { Box } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import styles from "./BaseLayout.module.css";
const BaseLayout = ({ children }) => {
  const matches = useMediaQuery((theme) => theme.breakpoints.up("xl"));

  return (
    <div className={matches ? styles.dividers : ""}>
      {matches && (
        <div
          style={{
            zIndex: "1",
            position: "fixed",
            backgroundColor: "white",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
        ></div>
      )}

      <Box sx={{ px: matches ? 3 : 0 }}>
        <Navbar></Navbar>
        <div
          style={{
            zIndex: matches ? 2 : -1,
            display: "flex",
            position: matches ? "relative" : "static",
            flexDirection: "column",
          }}
        >
          {children}
        </div>
      </Box>
    </div>
  );
};

export default BaseLayout;
