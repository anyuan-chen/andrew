import { Box } from "@mui/system";
import Content from "../shared/Content";
import { Typography } from "@mui/material";
import Link from "../Link";

const MobileWorkPreview = ({
  frontmatter: { title, date, description, thumbnailSrc, href },
}) => {
  return (
    <Link href={`/work/${href}`}>
      <Content sx={{ bgcolor: "primary.lighter", rowGap: 4 }}>
        <img src={thumbnailSrc} style={{ borderRadius: "2%" }}></img>
        <Box sx={{ display: "flex", flexDirection: "column", rowGap: 2 }}>
          <Typography variant="h1">{title}</Typography>
          <Typography variant="h3">{description}</Typography>
        </Box>
      </Content>
    </Link>
  );
};
export default MobileWorkPreview;
