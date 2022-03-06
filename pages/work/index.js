import React from "react";
import BaseLayout from "../../src/shared/BaseLayout";
import Container from "../../src/shared/Container";
import Content from "../../src/shared/Content";
import Title from "../../src/shared/Title";
import matter from "gray-matter";
import { Box } from "@mui/system";
import fs from "fs";
import path from "path";
import { motion } from "framer-motion";
import WorkPreview from "../../src/work/workPreview";


// const frontmatter = {
//   title: "title",
//   description: "description",
//   date: "11/10/21",
//   thumbnailSrc: "/",
// };

export default function Work({ frontmatter }) {
  return (
    <BaseLayout>
      <Container>
        <Content sx={{ display: "flex", flexDirection: "column", rowGap: 5 }}>
          <Title>Work</Title>
          <Box
            component={motion.div}
            sx={{ display: "flex", flexDirection: "column", rowGap: 4 }}
          >
            {frontmatter.map((fileInfo) => {
              return <WorkPreview frontmatter={fileInfo}></WorkPreview>;
            })}
          </Box>
        </Content>
      </Container>
    </BaseLayout>
  );
}

export async function getStaticProps() {
  const fileNames = fs.readdirSync(path.join("mdx", "work"));
  const frontmatter = fileNames.map((file) => {
    const buffer = fs.readFileSync(path.join("mdx", "work", file));
    const {
      data: { title, date, description, thumbnailSrc },
    } = matter(buffer);
    const href = file.substr(0, file.length - 4);
    return {
      title,
      date,
      description,
      thumbnailSrc,
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
