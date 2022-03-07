import React from "react";
import BaseLayout from "../src/shared/BaseLayout";
import Container from "../src/shared/Container";
import { Typography, useMediaQuery } from "@mui/material";
import Content from "../src/shared/Content";
import ContactRow from "../src/contact/contactRow";
import { Box } from "@mui/system";
import Link from "../src/Link";
import ResumeLink from "../src/shared/resumeLink";
import Title from "../src/shared/Title";
import Head from "next/head";
export default function Contact() {
  const matches = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  return (
    <BaseLayout>
      <Head>
        <title>Contact</title>
      </Head>
      <Container
        sx={{
          display: matches ? "grid" : "flex",
          gridTemplate: "1fr 1fr 1fr 1fr / 1fr 1fr 1fr 1fr",
          gridGap: matches ? 8 : 4,
        }}
      >
        <Content
          sx={{
            gridRow: "1/3",
            gridColumn: "1/5",
            display: "flex",
            flexDirection: "column",
            rowGap: matches ? 6 : 5,
          }}
        >
          <Typography variant="h2">Contact Me</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", rowGap: 5 }}>
            <ContactRow
              title="Email"
              displayHref="andrew.chen.anyuan@gmail.com"
              href="andrew.chen.anyuan@gmail.com"
            ></ContactRow>
            <ContactRow
              title="LinkedIn"
              displayHref="linkedin.com/in/anyuan-chen"
              href="https://www.linkedin.com/in/anyuan-chen/"
            ></ContactRow>
            <ContactRow
              title="Github"
              displayHref="github.com/anyuan-chen"
              href="https://github.com/anyuan-chen"
            ></ContactRow>
          </Box>
        </Content>
        <Content
          sx={{ gridRow: "3/4", gridColumn: "1/3", rowGap: matches ? 6 : 5 }}
        >
          <Title>Resume</Title>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <ResumeLink
              text=".pdf"
              href="/resume/andrewchenresume.pdf"
            ></ResumeLink>
            <ResumeLink
              text=".docx"
              href="/resume/andrewchenresume.docx"
            ></ResumeLink>
            <ResumeLink
              text=".tex"
              href="/resume/andrewchenresume.tex"
            ></ResumeLink>
          </Box>
        </Content>
        <Content
          sx={{ gridRow: "3/4", gridColumn: "3/5", rowGap: matches ? 6 : 5 }}
        >
          <Title>Availability</Title>
          <Typography variant="h3" sx={{ color: "white" }}>
            I'm studying full time right now at Bayview, but open to freelancing
            opportunities.
          </Typography>
        </Content>
      </Container>
    </BaseLayout>
  );
}
