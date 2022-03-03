import Link from "../../Link";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: {
    opacity: 1,
  },
};
const AnimatedLink = ({ href, value }) => {
  return (
    <Link
      href={href}
      underline="none"
      variants={itemVariants}
      sx={{
        my: 5,
        textDecorationColor: "white",
      }}
    >
      <Typography
        component={motion.a}
        sx={{
          textDecoration: "underline",
          textDecorationColor: "rgba(255,255,255,0)",
          color: "white",
        }}
        variant="h1"
        whileHover={{
          textDecorationColor: "rgba(255,255,255,1)",
        }}
      >
        {value}
      </Typography>
    </Link>
  );
};

export default AnimatedLink;
