import Navbar from "../navbar/Navbar";
import { Box } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import styles from "./BaseLayout.module.css";
const BaseLayout = ({ children }) => {
  const matches = useMediaQuery((theme) => theme.breakpoints.up("xl"));

  return (
    <div className={styles.dividers}>
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

      <Box sx={{px: 3}}>
        <Navbar></Navbar>
        <div
          style={{
            zIndex: "2",
            display: "flex",
            position: "relative",
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
