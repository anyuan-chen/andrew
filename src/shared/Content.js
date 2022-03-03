import { Box } from "@mui/system";

const Content = ({ children, sx }) => {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 5,
        bgcolor: "primary.main",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};
export default Content;
