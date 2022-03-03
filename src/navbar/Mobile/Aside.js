import { motion, AnimatePresence } from "framer-motion";
import AnimatedLink from "../Mobile/AnimatedLink";
import { Box } from "@mui/system";

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
};

const Aside = ({ links }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        bgcolor: "primary.main",
        height: "100vh",
        zIndex: "2",
      }}
      component={motion.div}
      initial={{ width: 0 }}
      animate={{ width: "80vw" }}
      exit={{ width: 0, transition: { delay: 0.7, duration: 0.4 } }}
    >
      <Box
        component={motion.div}
        initial="closed"
        variants={sideVariants}
        animate="open"
        exit="closed"
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 5
        }}
      >
        {links.map((link, index) => {
          return (
            <AnimatedLink
              key={index}
              href={link.href}
              value={link.value}
            ></AnimatedLink>
          );
        })}
      </Box>
    </Box>
  );
};

export default Aside;
