import Link from "../../Link";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";

//the animated link is used to represent each link in the
const AnimatedLink = ({ href, value }) => {
  return (
    <Link
      href={href}
      underline="none"
      sx={{
        my: 5,
      }}
    >
      <Typography
        component={motion.div}
        sx={{
          textDecoration: "underline",
          textDecorationColor: "rgba(255,255,255,0)",
          color: "white",
        }}
        variant="nav"
        whileHover={{ textDecorationColor: "rgba(255,255,255,1)" }}
      >
        {value}
      </Typography>
    </Link>
  );
};

export default AnimatedLink;
