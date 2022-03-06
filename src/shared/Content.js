import { Box } from "@mui/system";
import { useMediaQuery } from "@mui/material";

const Content = ({ children, sx }) => {
  const matches = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: matches ? 6 : 5,
        position: "relative",
        bgcolor: "primary.main",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};
export default Content;
