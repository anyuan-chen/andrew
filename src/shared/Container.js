import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
const Container = ({ children, sx }) => {
  const matches = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  return (
    <Box
      sx={{
        marginLeft: matches ? "18rem" : "0",
        marginTop: matches ? "0" : "5rem",
        flexDirection: "column",
        bgcolor: matches ? "white" : "secondary.lighter",
        borderWidth: matches ? 0 : "4px",
        borderColor: matches ? "" : "secondary.lighter",
        borderStyle: matches ? "" : "solid",
        minHeight: matches ? "" : "100vh",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};
export default Container;
