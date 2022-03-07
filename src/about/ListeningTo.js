import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
const ListeningTo = ({
  songInfo: { artist, imgSrc, album, name, lastFmHref },
}) => {
  const matches = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const [chinese, setChinese] = useState(false);
  const [processedName, setProcessedName] = useState(name);
  useEffect(() => {
    for (let i = 0; i < name.length; i++) {
      if (/[a-zA-Z ]/.test(name.charAt[i])) {
        setChinese(true);
      }
    }
  });
  return (
    <Box sx={{ bgcolor: "#162932", display: "flex" }}>
      <img
        src={imgSrc}
        width={matches ? "300px" : "150px"}
        style={{ objectFit: "cover" }}
      ></img>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: 5,
          rowGap: 5,
          flexGrow: 1,
        }}
      >
        <Typography variant="h1" sx={{ fontWeight: "medium" }}>
          {processedName}
        </Typography>
        <hr style={{ opacity: 0.2, width: "100%" }}></hr>

        <Typography variant="h3">
          <Typography display="inline" variant="h5" component="span">
            Artist:{" "}
          </Typography>
          {artist}
        </Typography>
        <Typography variant="h3">
          <Typography display="inline" variant="h5" component="span">
            Album :{" "}
          </Typography>{" "}
          {album}
        </Typography>
      </Box>
    </Box>
  );
};

export default ListeningTo;
