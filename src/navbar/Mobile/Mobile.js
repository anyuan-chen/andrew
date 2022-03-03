import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const Mobile = () => {
  return (
    <Box
      sx={{
        p: 4,
        height: "5rem",
        bgcolor: "primary.main",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <img src="/icons/logo_white.svg" height="100%"></img>
      <img src="/icons/hamburger_menu.svg" height="100%"></img>
    </Box>
  );
};

export default Mobile;
