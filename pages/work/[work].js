import { Box } from "@mui/system";
import fs from "fs";
import { bundleMDX } from "mdx-bundler";
import path from "path";
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
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
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
  const file = path.join(process.cwd(), "mdx", "work", `${work}.mdx`);
  const { code, frontmatter } = await bundleMDX({
    file: file,
    cwd: path.join(process.cwd(), "mdx", "work"),
  });
  return {
    props: {
      code,
      frontmatter,
    },
  };
}

export async function getStaticPaths() {
  const fileNames = fs.readdirSync(path.join("mdx", "work"));
  return {
    paths: fileNames.map((file) => {
      const work = file.substr(0, file.length - 4);
      return { params: { work: work } };
    }),
    fallback: true,
  };
}

export default Work;
