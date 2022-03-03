import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Navbar from "../src/navbar/Navbar";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Index() {
  const matches = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Navbar></Navbar>
      <Box
        sx={{
          marginLeft: matches ? "20rem" : "0",
          marginTop: matches ? "0" : "5rem",
        }}
      >
        <Box>
          <Typography>About Me</Typography>
          <Typography>I’m a software engineer based in Toronto.</Typography>
          <Typography>
            I design and build refreshing web experiences, packed to the punch
            with delightful interactions.
          </Typography>
        </Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </Box>
    </Box>
  );
}
