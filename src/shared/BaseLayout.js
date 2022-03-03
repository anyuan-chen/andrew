import Navbar from "../navbar/Navbar";
import { Box } from "@mui/system";

const BaseLayout = ({children}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", rowGap: 3 }}>
      <Navbar></Navbar>
      {children}
    </Box>
  );
};

export default BaseLayout