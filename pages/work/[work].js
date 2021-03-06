import { Box } from "@mui/system";
import BaseLayout from "../../src/shared/BaseLayout";
import Container from "../../src/shared/Container";
import matter from "gray-matter";
import Content from "../../src/shared/Content";
import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { Typography } from "@mui/material";
import ProjectHeader from "../../src/work/projectHeader";
import { useMediaQuery } from "@mui/material";
import Head from "next/head";
import components from "../../src/shared/DesignSystem";
import { getSinglePost, getAllPosts } from "../../src/work/getWorkPosts";

const Work = ({ code, frontmatter }) => {
  const matches = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <BaseLayout>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <Container sx={{ display: "flex", rowGap: matches ? 2 : 1 }}>
        <ProjectHeader frontmatter={frontmatter}></ProjectHeader>
        <Content sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              width: matches ? "60%" : "100%",
              display: "flex",
              flexDirection: "column",
              rowGap: "2rem",
            }}
          >
            <Component components={components}></Component>
          </Box>
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
  const paths = getAllPosts().map(({ work }) => ({ params: { work } }));
  return {
    paths,
    fallback: false,
  };
}

export default Work;
