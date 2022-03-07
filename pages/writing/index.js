import React from "react";
import BaseLayout from "../../src/shared/BaseLayout";
import Container from "../../src/shared/Container";
import Content from "../../src/shared/Content";
import Title from "../../src/shared/Title";
import ArticlePreview from "../../src/writing/articlePreview";
import matter from "gray-matter";
import { Box } from "@mui/system";
import fs from "fs";
import path from "path";
import { motion } from "framer-motion";
import Head from "next/head";
// const frontmatter = {
//   title: "title",
//   description: "description",
//   date: "11/10/21",
//   thumbnailSrc: "/",
// };

export default function Writing({ frontmatter }) {
  return (
    <BaseLayout>
      <Head>
        <title>Writing</title>
      </Head>
      <Container>
        <Content sx={{ display: "flex", flexDirection: "column", rowGap: 5 }}>
          <Title>Writing</Title>
          <Box
            component={motion.div}
            sx={{ display: "flex", flexDirection: "column", rowGap: 4 }}
          >
            {frontmatter.map((fileInfo, index) => {
              return (
                <ArticlePreview
                  frontmatter={fileInfo}
                  key={index}
                ></ArticlePreview>
              );
            })}
          </Box>
        </Content>
      </Container>
    </BaseLayout>
  );
}

export async function getStaticProps() {
  const fileNames = fs.readdirSync(path.join(process.cwd(), "mdx", "writing"));
  const frontmatter = fileNames.map((file) => {
    const buffer = fs.readFileSync(
      path.join(process.cwd(), "mdx", "writing", file)
    );
    const {
      data: { title, date, description },
    } = matter(buffer);
    const href = file.substr(0, file.length - 4);
    return {
      title,
      date,
      description,
      href,
    };
  });
  console.log(frontmatter);
  return {
    props: {
      frontmatter,
    },
  };
}
