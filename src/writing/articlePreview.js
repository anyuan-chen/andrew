import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import Link from "../Link";

const ArticlePreview = ({
  frontmatter: { title, description, date, thumbnailSrc, href },
}) => {
  return (
    <Link href={`/work/${href}`}>
      <Box sx={{ display: "flex", flexDirection: "column" , rowGap: 4 }}>
        <Typography variant="h1">{title}</Typography>
        <Typography variant="h3">{description}</Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h3" sx={{ color: "secondary.main" }}>
            Read More
          </Typography>
          <Typography
            variant="h3"
            sx={{ color: "secondary.main", fontStyle: "italic" }}
          >
            {date}
          </Typography>
        </Box>
        <hr style={{color: "white", width: "100%", opacity: 0.4}}></hr>
      </Box>
    </Link>
  );
};

export default ArticlePreview;
