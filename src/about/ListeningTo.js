import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";

const ListeningTo = ({
  songInfo: { artist, imgSrc, album, name, lastFmHref },
}) => {
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
      <img src={imgSrc} width="300px" style={{ objectFit: "cover" }}></img>
      <Box
        sx={{ display: "flex", flexDirection: "column", padding: 5, rowGap: 5 }}
      >
        <Typography variant="h1">{processedName}</Typography>
        <Typography variant="h3">{artist}</Typography>
        <hr style={{ color: "#D8D8D8", width: "100%" }}></hr>
        <Typography variant="h3">{album}</Typography>
      </Box>
    </Box>
  );
};

export default ListeningTo;
