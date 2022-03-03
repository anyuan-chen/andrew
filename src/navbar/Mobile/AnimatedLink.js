import Link from "../../Link";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Box } from "@mui/system";
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
    <Link href={href}>
      <Box
        component={motion.div}
        underline="none"
        component={motion.a}
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
      </Box>
    </Link>
  );
};

export default AnimatedLink;
