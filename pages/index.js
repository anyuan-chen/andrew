import * as React from "react";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import BaseLayout from "../src/shared/BaseLayout";
import Content from "../src/shared/Content";
import Container from "../src/shared/Container";
import Title from "../src/shared/Title";
import fs from "fs";
import path from "path";
import { AnimatePresence, motion } from "framer-motion";
import matter from "gray-matter";
import WorkPreview from "../src/work/workPreview";
import { Box } from "@mui/system";
import Link from "../src/Link";
import SmallWorkPreview from "../src/index/smallWorkPreview";
import ResumeLink from "../src/shared/resumeLink";
import Head from "next/head";
const underlineMotion = {
  rest: {
    width: "0%",
    opacity: 0,
  },
  hover: {
    width: "100%",
    opacity: 1,
  },
};
export default function Index({ workFrontmatter }) {
  const matches = useMediaQuery((theme) => theme.breakpoints.up("xl"));
  return (
    <AnimatePresence>
      <Head>
        <title>Andrew Chen</title>
      </Head>
      <BaseLayout>
        <Container
          sx={{
            display: matches ? "grid" : "flex",
            gridTemplate: "1fr 1fr 1fr 1fr / 1fr 1fr 1fr 1fr",
            gridGap: matches ? 8 : 4,
            minHeight: matches ? "100vh" : "100px",
          }}
        >
          <Content sx={{ rowGap: 5, gridRow: "1/3", gridColumn: "1/5" }}>
            <Title>About Me</Title>
            <Typography variant="h1">
              I architect and build enchanting web experiences.
            </Typography>
            <Typography variant="h3">
              I'm focused on delivering interactions packed with delight.
            </Typography>
          </Content>
          <Content sx={{ rowGap: 5, gridRow: "3/5", gridColumn: "1/3" }}>
            <Typography variant="h2">Projects</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", rowGap: 4 }}>
              {workFrontmatter.map((work) => {
                return <SmallWorkPreview frontmatter={work}></SmallWorkPreview>;
              })}
            </Box>
          </Content>
          <Content sx={{ rowGap: 5, gridRow: "3/5", gridColumn: "3/5" }}>
            <Typography variant="h2">Resume</Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              {/* <Box component={motion.div}>
                <Link href="/resume/andrewchenresume.pdf">
                  <Typography variant="h1">.pdf</Typography>
                </Link>
              </Box> */}
              <ResumeLink
                text=".pdf"
                href="/resume/resumeandrewchen.pdf"
              ></ResumeLink>
              <ResumeLink
                text=".docx"
                href="/resume/resumeandrewchen.docx"
              ></ResumeLink>
              <ResumeLink
                text=".tex"
                href="/resume/resumeandrewchen.tex"
              ></ResumeLink>
            </Box>
          </Content>
          {/* <Content
          sx={{ rowGap: 5, gridRow: "4/5", gridColumn: "3/5" }}
        ></Content> */}
        </Container>
      </BaseLayout>
    </AnimatePresence>
  );
}
export async function getStaticProps() {
  let files = fs.readdirSync(path.join(process.cwd(), "mdx", "work"));
  files = files.slice(0, 3);
  let workFrontmatter = files.map((file) => {
    const buffer = fs.readFileSync(
      path.join(process.cwd(), "mdx", "work", file)
    );
    const {
      data: { title, date, description, thumbnailSrc, order },
    } = matter(buffer);
    const href = file.substr(0, file.length - 4);
    return {
      title,
      date,
      description,
      thumbnailSrc,
      href,
      order,
    };
  });
  console.log(workFrontmatter[0]);
  workFrontmatter = workFrontmatter.sort((firstEl, secondEl) => {
    return firstEl.order - secondEl.order;
  });
  return {
    props: {
      workFrontmatter,
    },
  };
}
