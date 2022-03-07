import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "../Link";
import Content from "../shared/Content";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

const ArticleHeader = ({ frontmatter: { title, description } }) => {
  const matches = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  return (
    <Content
      sx={{
        display: matches ? "grid" : "flex",
        flexDirection: "column-reverse",
        gridTemplateRows: "1fr",
        gridTemplateColumns: "1fr 1fr",
        gridGap: matches ? "8rem" : "2rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          columnGap: matches ? 0 : "1rem",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h1" sx={{ color: "secondary.main" }}>
          {title}
        </Typography>
      </Box>
    </Content>
  );
};

export default ArticleHeader;
