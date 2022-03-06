import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { AnimatePresence, motion } from "framer-motion";
import Link from "../Link";

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
const DesktopWorkPreview = ({
  frontmatter: { title, date, description, thumbnailSrc, href },
}) => {
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
            <Typography variant="h1">{title}</Typography>
            <Box sx={{}} component={motion.div} variants={arrowMotion}>
              <img
                src="/icons/uparrow_white.svg"
                style={{ height: "3rem", transform: "translate(2rem, -10px)" }}
              ></img>
            </Box>
          </Box>

          <Typography
            variant="h2"
            sx={{ fontFamily: "Inter", fontWeight: "normal" }}
          >
            {date.substr(date.length - 4)}
          </Typography>
        </Box>
      </Link>
    </AnimatePresence>
  );
};

export default DesktopWorkPreview;
