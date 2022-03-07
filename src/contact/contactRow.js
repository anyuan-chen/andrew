import { Box } from "@mui/system";
import { AnimatePresence } from "framer-motion";
import Link from "../Link";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
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
const ContactRow = ({ href, title, displayHref }) => {
  const matches = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  return (
    <AnimatePresence>
      <Box>
        <Typography variant="h3" sx={{ color: "secondary.main" }}>
          {title}
        </Typography>
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
            <Box
              sx={{ display: "flex", alignItems: "flex-end" }}
              component={motion.div}
              variants={textMotion}
            >
              <Typography variant="h1">
                {displayHref ? displayHref : href}
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
      </Box>
    </AnimatePresence>
  );
};

export default ContactRow;
