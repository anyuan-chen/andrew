import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Navbar from "../src/navbar/Navbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import BaseLayout from "../src/shared/BaseLayout";
import Content from "../src/shared/Content";

export default function Index() {
  const matches = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  return (
    <BaseLayout>
      <Box
        sx={{
          marginLeft: matches ? "18rem" : "0",
          marginTop: matches ? "0" : "5rem",
          width: "100%",
          rowGap: 1,
          bgcolor: "primary.lighter",
        }}
      >
        <Content sx={{ rowGap: 5 }}>
          <Typography variant="h2">About Me</Typography>
          <Typography variant="h1">
            I’m a software engineer based in Toronto.
          </Typography>
          <Typography variant="h3">
            I design and build refreshing web experiences, packed to the punch
            with delightful interactions.
          </Typography>
        </Content>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </Box>
    </BaseLayout>
  );
}
