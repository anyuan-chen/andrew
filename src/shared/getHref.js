const getHrefFromMDX = (fileName) => {
  const truncated = fileName.substr(0, fileName.length - 4);
  return truncated;
};
