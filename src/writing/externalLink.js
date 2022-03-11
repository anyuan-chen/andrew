import { Typography } from "@mui/material";
import Link from "../Link";
import { motion } from "framer-motion";

const arrowVariants = {
  rest: {
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
  hover: {
    transform: "translate(5px, -5px)",
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn",
    },
  },
};
const ExternalLink = ({ href, name }) => {
  return (
    <motion.div initial="rest" whileHover="hover" animate="rest">
      <Link href={href} target="_blank" sx={{ display: "flex", columnGap: 3 }}>
        <Typography sx={{ color: "white" }}>{name}</Typography>
        <motion.div variants={arrowVariants}>
          <img
            src="/icons/uparrow_white.svg"
            style={{ transform: "translate(0, 5px)" }}
          ></img>
        </motion.div>
      </Link>
    </motion.div>
  );
};
export default ExternalLink;
