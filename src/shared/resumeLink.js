import { motion } from "framer-motion";
import Link from "../Link";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";

const underlineMotion = {
  rest: {
    textDecorationColor: "#021923",
  },
  hover: {
    textDecorationColor: "white",
    opacity: 0.5
  },
};
const ResumeLink = ({ href, text }) => {
  return (
    <Box
      component={motion.div}
      initial="rest"
      animate="rest"
      whileHover="hover"
    >
      <Link href={href}>
        <Typography
          component={motion.h3}
          variants={underlineMotion}
          variant="h1"
          sx={{
            textDecoration: "underline",
            textDecorationThickness: "4px",
            textDecorationOffset: "3px",
          }}
        >
          {text}
        </Typography>
      </Link>
    </Box>
  );
};

export default ResumeLink;
