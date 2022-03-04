import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import AnimatedLink from "../Mobile/AnimatedLink";
import Aside from "./Aside";


const Mobile = ({ links }) => {
  const [toggled, setToggled] = useState(false);
  return (
    <Box component={motion.div}>
      <Box
        sx={{
          p: 4,
          height: "5rem",
          bgcolor: "primary.main",
          display: "flex",
          width: "100vw",
          justifyContent: "space-between",
          position: "fixed",
          zIndex: "1",
          top: 0,
        }}
      >
        <img src="/icons/logo_white.svg" height="100%"></img>
        <Button
          onClick={() => {
            setToggled(!toggled);
          }}
        >
          <img src="/icons/hamburger_menu.svg" height="100%"></img>
        </Button>
      </Box>
      <AnimatePresence>{toggled && <Aside links={links}></Aside>}</AnimatePresence>
    </Box>
  );
};

export default Mobile;
