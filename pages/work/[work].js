import { Box } from "@mui/system";
import BaseLayout from "../../src/shared/BaseLayout";
import Container from "../../src/shared/Container";
import matter from "gray-matter";
import Content from "../../src/shared/Content";
import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { Typography } from "@mui/material";
import ProjectHeader from "../../src/writing/projectHeader";
import { useMediaQuery } from "@mui/material";
import Head from "next/head";
import { getSinglePost } from "../../src/work/getWorkPosts";

const Paragraph = ({ children }) => {
  return (
    <Typography variant="p" color="secondary.lighter">
      {children}
    </Typography>
  );
};
const Work = ({ code, frontmatter }) => {
  const matches = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <BaseLayout>
      <Container sx={{ display: "flex", rowGap: matches ? 2 : 1 }}>
        <ProjectHeader frontmatter={frontmatter}></ProjectHeader>
        <Content sx={{}}>
          <Component components={{ p: Paragraph }}></Component>
        </Content>
      </Container>
    </BaseLayout>
  );
};

export async function getStaticProps({ params: { work } }) {
  const { code, frontmatter } = await getSinglePost(work);
  return {
    props: {
      code,
      frontmatter,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPosts().map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
}

export default Work;
