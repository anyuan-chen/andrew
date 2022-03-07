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
import { getSinglePost, getAllPosts } from "../../src/work/getWorkPosts";
import DesignSystem from "../../src/shared/TextStyles";

const Paragraph = ({ children }) => {
  return (
    <Typography variant="p" color="secondary.lighter">
      {children}
    </Typography>
  );
};
const Heading = ({ children }) => {
  return <Typography variant="h1">{children}</Typography>;
};
const Work = ({ code, frontmatter }) => {
  const matches = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <BaseLayout>
      <Container sx={{ display: "flex", rowGap: matches ? 2 : 1 }}>
        <ProjectHeader frontmatter={frontmatter}></ProjectHeader>
        <Content sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "60%" }}>
            <Component components={{ DesignSystem }}></Component>
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
