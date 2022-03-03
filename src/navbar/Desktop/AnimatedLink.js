import Link from "../../Link";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";

const AnimatedLink = ({ href, value }) => {
  return (
    <Link
      href={href}
      underline="none"
      sx={{
        my: 5,
        textDecorationColor: "white",
      }}
    >
      <Typography
        component={motion.a}
        sx={{
          textDecoration: "underline",
          textDecorationColor: "rgba(0,0,0,0)",
        }}
        variant="nav"
        whileHover={{ textDecorationColor: "rgba(0,0,0,1)" }}
      >
        {value}
      </Typography>
    </Link>
  );
};

export default AnimatedLink;
