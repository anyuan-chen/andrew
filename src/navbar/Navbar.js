import { useEffect, useState } from "react";
import Mobile from "./Mobile/Mobile";
import Desktop from "./Desktop/Desktop";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const links = [
  { href: "/", value: "Home" },
  { href: "/work", value: "Work" },
  { href: "/writing", value: "Writing" },
  { href: "/about", value: "About" },
  { href: "/contact", value: "Contact" },
];

const Navbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  return matches ? (
    <Desktop links={links}></Desktop>
  ) : (
    <Mobile links={links}></Mobile>
  );
};

export default Navbar;
