import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const Title = ({ children }) => {
  const matches = useMediaQuery((theme) => theme.breakpoints.up("md"));
  return (
    <Box sx={{ display: "flex", alignItems: "bottom" }}>
      <div>
        <Typography variant="h2" sx={{}}>
          {children}
        </Typography>
      </div>
      <div>
        <img
          src="/icons/downarrow_gray.svg"
          style={{
            height: matches ? "100%" : "0px",
          }}
        ></img>
      </div>
    </Box>
  );
};
export default Title;
