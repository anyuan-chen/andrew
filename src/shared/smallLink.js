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
    transform: "translate(8px, -8px)",
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
const SmallLink = ({ href, text }) => {
  const matches = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  return (
    <AnimatePresence>
      <Link href={href} target="blank">
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
          <Box
            component={motion.div}
            variants={textMotion}
            sx={{ display: "flex", alignItems: "flex-end", columnGap: 4 }}
          >
            <Typography variant="h3">{text}</Typography>
            <Box sx={{}} component={motion.div} variants={arrowMotion}>
              <img
                src="/icons/uparrow_white.svg"
                style={{
                  height: "1rem",
                }}
              ></img>
            </Box>
          </Box>
        </Box>
      </Link>
    </AnimatePresence>
  );
};
export default SmallLink;
