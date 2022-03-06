import * as React from "react";
import Typography from "@mui/material/Typography";
import BaseLayout from "../src/shared/BaseLayout";
import Content from "../src/shared/Content";
import Container from "../src/shared/Container";
import { useMediaQuery } from "@mui/material";
import Title from "../src/shared/Title";
import ListeningTo from "../src/about/ListeningTo";

export default function About({ songInfo }) {
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
        <Content sx={{ rowGap: 5, gridRow: "1/2", gridColumn: "1/5" }}>
          <Title>About Me</Title>
          <Typography variant="h1">
            I build web experiences with a focus on interaction design.
          </Typography>
          <Typography variant="h3">
            I also attend Bayview Secondary School, where I'll be graduating in
            2022.
          </Typography>
        </Content>
        <Content sx={{ gridRow: "3/4", gridColumn: "1/5" }}>
          <Title>What I'm Listening To</Title>
          <ListeningTo songInfo={songInfo}></ListeningTo>
        </Content>
        <Content sx={{ gridRow: "2/3", gridColumn: "1/3" }}>
          <Title>What I'm Doing</Title>
        </Content>
        <Content sx={{ gridRow: "2/3", gridColumn: "3/5" }}>
          <Title>Some Links</Title>
        </Content>
        <Content sx={{ gridRow: "4/5", gridColumn: "1/5" }}>
          <Title>Credits</Title>
        </Content>
      </Container>
    </BaseLayout>
  );
}

export async function getServerSideProps() {
  const apiKey = process.env.LAST_FM_API_KEY;
  const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=andrewchen2004&api_key=${apiKey}&format=json`;
  const req = await fetch(url);
  const res = await req.json();
  const firstSong = res.recenttracks.track[0];
  const artist = firstSong.artist["#text"];
  const imgSrc = firstSong.image[firstSong.image.length - 2]["#text"];
  const album = firstSong.album["#text"];
  const name = firstSong.name;
  const lastFmHref = firstSong.url;
  const songInfo = { artist, imgSrc, album, name, lastFmHref };
  return {
    props: {
      songInfo,
    },
  };
}
