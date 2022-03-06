import DesktopWorkPreview from "./desktopWorkPreview";
import MobileWorkPreview from "./mobileWorkPreview";
import { useMediaQuery } from "@mui/material";

const WorkPreview = ({ frontmatter }) => {
  const matches = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  return matches ? (
    <DesktopWorkPreview frontmatter={frontmatter}></DesktopWorkPreview>
  ) : (
    <MobileWorkPreview frontmatter={frontmatter}></MobileWorkPreview>
  );
};
export default WorkPreview;
