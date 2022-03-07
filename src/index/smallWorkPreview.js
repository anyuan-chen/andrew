import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { AnimatePresence, motion } from "framer-motion";
import Link from "../Link";
import { useMediaQuery } from "@mui/material";

const arrowMotion = {
  rest: {
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    transform: "translate(1rem, -16px)",
    opacity: 0.5,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};
const textMotion = {
  rest: {
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    opacity: 0.5,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};
const SmallWorkPreview = ({
  frontmatter: { title, date, description, thumbnailSrc, href },
}) => {
  const matches = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  return (
    <AnimatePresence>
      <Link href={`/work/${href}`}>
        <Box
          component={motion.div}
          initial="rest"
          whileHover="hover"
          animate="rest"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            width: "100%",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <Typography variant="h1" as={motion.h1} variants={textMotion}>
              {title}
            </Typography>
            <Box sx={{}} component={motion.div} variants={arrowMotion}>
              <img
                src="/icons/uparrow_white.svg"
                style={{
                  height: matches ? "3rem" : "1rem",
                  transform: `translate(${matches ? "2rem" : "1rem"}, ${
                    matches ? "-10px" : "-5px"
                  })`,
                }}
              ></img>
            </Box>
          </Box>
        </Box>
      </Link>
    </AnimatePresence>
  );
};

export default SmallWorkPreview;
