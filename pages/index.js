import * as React from "react";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import BaseLayout from "../src/shared/BaseLayout";
import Content from "../src/shared/Content";
import Container from "../src/shared/Container";
import Title from "../src/shared/Title";

export default function Index() {
  const matches = useMediaQuery((theme) => theme.breakpoints.up("xl"));

  return (
    <BaseLayout>
      <Container
      sx={{
          display: matches ? "grid" : "flex",
          gridTemplate: "1fr 1fr 1fr 1fr / 1fr 1fr 1fr 1fr",
          gridGap: matches ? 8 : 4,
        }}
      >
        <Content sx={{ rowGap: 5, gridRow: "1/3", gridColumn: "1/5" }}>
          <Title>About Me</Title>
          <Typography variant="h1">
            I’m a software engineer based in Toronto.
          </Typography>
          <Typography variant="h3">
            I design and build refreshing web experiences, packed to the punch
            with delightful interactions.
          </Typography>
        </Content>
        <Content sx={{ rowGap: 5, gridRow: "3/5", gridColumn: "1/3" }}>
          
        </Content>
        <Content
          sx={{ rowGap: 5, gridRow: "3/4", gridColumn: "3/5" }}
        ></Content>
        <Content
          sx={{ rowGap: 5, gridRow: "4/5", gridColumn: "3/5" }}
        ></Content>
      </Container>
    </BaseLayout>
  );
}
