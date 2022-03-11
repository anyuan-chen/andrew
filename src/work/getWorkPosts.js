import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";
import rehypePrism from "rehype-prism-plus";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import { remarkMdxImages } from "remark-mdx-images";

export const ROOT = process.cwd();
export const POSTS_PATH = path.join(process.cwd(), "mdx/work");

export const getFileContent = (filename) => {
  return fs.readFileSync(path.join(POSTS_PATH, filename), "utf8");
};

const getCompiledMDX = async (content) => {
  if (process.platform === "win32") {
    process.env.ESBUILD_BINARY_PATH = path.join(
      ROOT,
      "node_modules",
      "esbuild",
      "esbuild.exe"
    );
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      ROOT,
      "node_modules",
      "esbuild",
      "bin",
      "esbuild"
    );
  }
  // Add your remark and rehype plugins here
  const remarkPlugins = [remarkParse, remarkMath, remarkMdxImages];
  const rehypePlugins = [rehypePrism, rehypeKatex, rehypeStringify];

  try {
    return await bundleMDX({
      source: content,
      cwd: ROOT,
      esbuildOptions: (options) => {
        options.loader = {
          ...options.loader,
          ".png": "dataurl",
        };
        return options;
      },
      xdmOptions(options) {
        options.remarkPlugins = [
          ...(options.remarkPlugins ?? []),
          ...remarkPlugins,
        ];
        options.rehypePlugins = [
          ...(options.rehypePlugins ?? []),
          rehypePrism,
          rehypeKatex,
        ];

        return options;
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const getSinglePost = async (work) => {
  const source = getFileContent(`${work}.mdx`);
  const { code, frontmatter } = await getCompiledMDX(source);
  return {
    frontmatter,
    code,
  };
};

export const getAllPosts = () => {
  return fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((fileName) => {
      const source = getFileContent(fileName);
      const work = fileName.substr(0, fileName.length - 4);
      const { data } = matter(source);
      return {
        frontmatter: data,
        work: work,
      };
    });
};
