import { Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import Link from "../Link";

const ListItem = ({ index, text, highlight, href }) => {
  const [start, setStart] = useState(text.substr(0, text.indexOf(highlight)));
  const [end, setEnd] = useState(
    text.substr(text.indexOf(highlight) + highlight.length)
  );
  const highlightMotion = {
    rest: {},
    hover: {
      color: "#DF8687",
    },
  };
  const fadeMotion = {
    rest: {},
    hover: {
      opacity: 0.5,
    },
  };
  return (
    <AnimatePresence>
      <Box
        component={motion.li}
        sx={{ display: "flex" }}
        // initial="rest"
        // whileHover="hover"
        // animate="rest"
      >
        {highlight === "" ? (
          <Typography variant="h3">{text}</Typography>
        ) : (
          <Typography variant="h3">
            <motion.span variants={fadeMotion}>{start}</motion.span>
            <motion.span
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={highlightMotion}
              style={{ color: "white" }}
            >
              <a
                sx={{
                  textDecoration: "underline",
                  textUnderlineOffset: "2px",
                }}
                target="blank"
                href={href}
              >
                {highlight}
              </a>
            </motion.span>
            <motion.span variants={fadeMotion}>{end}</motion.span>
          </Typography>
        )}
      </Box>
    </AnimatePresence>
  );
};
export default ListItem;
