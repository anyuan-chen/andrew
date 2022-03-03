import { Box } from "@mui/system";
import AnimatedLink from "./AnimatedLink";
import { motion } from "framer-motion";
import Link from "../../Link";
const Desktop = ({ links }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        overflow: "auto",
        rowGap: 6,
        width: "18rem",
        padding: 5,
        height: "100vh",
        bgcolor: "white",
        alignItems: "center",
      }}
    >
      <Link href="/">
        <Box
          component={motion.a}
          sx={{ display: "block" }}
          whileHover={{ scale: 1.02 }}
        >
          <img src="/icons/logo_black.svg" height="100%" alt="logo"></img>
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
