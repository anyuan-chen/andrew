import { Box } from "@mui/system";
import AnimatedLink from "./AnimatedLink";
import { motion } from "framer-motion";
import Link from "../../Link";
import { useMediaQuery } from "@mui/material";

const Desktop = ({ links }) => {
  const matches = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        overflow: "auto",
        rowGap: 6,
        width: matches ? "17.5rem" : "18rem",
        py: 5,
        zIndex: 3,
        position: "fixed",
        bgcolor: "primary.main",
        height: "calc(100vh )",
        alignItems: "center",
      }}
      component="nav"
    >
      <Link href="/">
        <Box
          component={motion.div}
          sx={{ display: "block" }}
          whileHover={{ scale: 1.02 }}
        >
          <img src="/icons/logo_white.svg" height="170px" alt="logo"></img>
        </Box>
      </Link>
      <Box sx={{ width: "170px", display: "flex", flexDirection: "column" }}>
        {links.map((link, index) => {
          return (
            <AnimatedLink
              key={index}
              href={link.href}
              value={link.value}
            ></AnimatedLink>
          );
        })}
      </Box>
    </Box>
  );
};

export default Desktop;
