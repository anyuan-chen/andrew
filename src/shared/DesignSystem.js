import { Typography } from "@mui/material";
import React from "react";
import { NextRouter } from "next/router";

const Paragraph = ({ children }) => {
  return (
    <Typography
      variant="p"
      component="p"
      sx={{ lineHeight: "2rem", color: "secondary.lighter" }}
    >
      {children}
    </Typography>
  );
};


const Heading1 = ({ children }) => {
  return (
    <Typography component="h1" variant="markdownh1">
      {children}
    </Typography>
  );
};

const Heading2 = ({ children }) => {
  return (
    <Typography component="h2" variant="h2">
      {children}
    </Typography>
  );
};
const Heading3 = ({ children }) => {
  return (
    <Typography component="h3" variant="h3">
      {children}
    </Typography>
  );
};
const Caption = ({ children }) => {
  return (
    <Typography variant="caption" sx={{ textAlign: "center" }}>
      {children}
    </Typography>
  );
};
const numberedList = ({ children }) => {
  return <ol style={{ listStyle: "decimal inside" }}>{children}</ol>;
};
const unorderedList = ({ children }) => {
  return <ul style={{ listStyle: "inside" }}>{children}</ul>;
};
const listElement = ({ children }) => {
  return (
    <Typography variant="p" sx={{ color: "secondary.lighter" }} component="li">
      {children}
    </Typography>
  );
};

const components = {
  p: Paragraph,
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  ol: numberedList,
  ul: unorderedList,
  li: listElement,
  Caption,
};

export default components;
