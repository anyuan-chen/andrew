// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";
// import { bundleMDX } from "mdx-bundler";


// export async function getPostData(work) {
//     const fullPath = path.join(blogDirectory, `${work}.mdx`);
//     const source = fs.readFileSync(fullPath, "utf8");
  
//     const { code, frontmatter } = await bundleMDX(source: source, {
//       xdmOptions(options) {
//         options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm];
//         options.rehypePlugins = [...(options?.rehypePlugins ?? []), rehypePrism];
//         return options;
//       },
//     });
  
//     return {
//       slug,
//       frontmatter,
//       code,
//     };
//   }