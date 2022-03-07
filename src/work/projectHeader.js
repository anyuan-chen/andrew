import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "../Link";
import Content from "../shared/Content";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import ExternalLink from "../writing/externalLink";

const ProjectHeader = ({
  frontmatter: { title, date, description, thumbnailSrc, role, team, links },
}) => {
  const matches = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  return (
    <Content
      sx={{
        display: matches ? "grid" : "flex",
        flexDirection: "column-reverse",
        gridTemplateRows: "1fr",
        gridTemplateColumns: "1fr 1fr",
        gridGap: matches ? "8rem" : "2rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          columnGap: matches ? 0 : "1rem",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h1" sx={{ color: "secondary.main" }}>
          {title}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row", columnGap: 6 }}>
          {links.map((link) => {
            return (
              <ExternalLink href={link.href} name={link.name}></ExternalLink>
            );
          })}
        </Box>
        <hr
          color="#9AA3A7"
          width="100%"
          style={{ height: "1px", opacity: "0.2" }}
        ></hr>
        <Box sx={{ display: "flex", flexDirection: "row", columnGap: 6 }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h5">Role:</Typography>
            <Typography variant="h4">{role}</Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h5">Time:</Typography>
            <Typography variant="h4">{date}</Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h5">Team</Typography>
            {team.map((member) => {
              return <Typography variant="h4">{member}</Typography>;
            })}
          </Box>
        </Box>
      </Box>
      <Box>
        <img
          src={thumbnailSrc}
          alt={`Preview of ${thumbnailSrc}`}
          width="95%"
          objectFit="scale-down"
        ></img>
      </Box>
    </Content>
  );
};

export default ProjectHeader;
