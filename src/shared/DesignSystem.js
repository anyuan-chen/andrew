import { Typography } from "@mui/material";
import React from "react";
import { NextRouter } from "next/router";

const Paragraph = ({ children }) => {
  return (
    <Typography variant="p" color="secondary.lighter">
      {children}
    </Typography>
  );
};
const Heading1 = ({ children }) => {
  return <Typography variant="h1">{children}</Typography>;
};
const Heading2 = ({ children }) => {
  return <Typography variant="h2">{children}</Typography>;
};
const Heading3 = ({ children }) => {
  return <Typography variant="h3">{children}</Typography>;
};

const components = {
  p: Paragraph,
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
};

export default components;
