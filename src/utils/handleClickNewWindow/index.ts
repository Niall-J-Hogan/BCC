export const handleClick = (websiteLink: string): void => {
  if (websiteLink) {
    window.open(websiteLink, "_blank");
  }
};
