import { useState } from "react";
import { Box } from "@mui/system";
import { motion } from "framer-motion";
import SmallLink from "./smallLink";
const FadeContainer = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <Box
      component={motion.div}
      sx={{ display: "flex", flexDirection: "column", rowGap: 5 }}
    >
      <SmallLink
        text="Figma"
        href="https://www.figma.com/@andrewchen"
      ></SmallLink>
      <SmallLink
        text="Github"
        href="https://github.com/anyuan-chen"
      ></SmallLink>
      <SmallLink
        text="Codeforces"
        href="https://codeforces.com/profile/anyuan -chen"
      ></SmallLink>
      <SmallLink
        text="AtCoder"
        href="https://atcoder.jp/users/anyuanchen"
      ></SmallLink>
    </Box>
  );
};

export default FadeContainer;
