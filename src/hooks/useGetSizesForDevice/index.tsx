import { useBreakpointValue } from "@chakra-ui/react";

export const UseGetSizeForDevices = () => {
  // Header Gif
  const textSize = useBreakpointValue({
    base: "md", // Mobile devices
    md: "2xl", // Medium screens
  });

  const gifSize = useBreakpointValue({
    base: "50vh", // Mobile devices
    md: "60vh", // Large screens and up
  });
  const gifPadding = useBreakpointValue({
    base: "8px", // Mobile devices
    md: "6px", // Large screens and up
  });
  const gifMargin = useBreakpointValue({
    base: "65px", // Mobile devices
    md: "60px", // Large screens and up
  });

  const gifButtonSize = useBreakpointValue({
    base: "80%", // Mobile devices
    md: "35%", // Large screens and up
  });

  // Sponsor Logo Box
  const imageSize = useBreakpointValue({
    base: "100px", // Mobile devices
    md: "200px", // Large screens and up
  });

  const sponsorTitleSize = useBreakpointValue({
    base: "sm", // Mobile devices
    md: "2xl", // Medium screens
  });
  const sponsorSubTitleSize = useBreakpointValue({
    base: "sm", // Mobile devices
    md: "xl", // Medium screens
  });
  const hideText = useBreakpointValue({
    base: "none", // Mobile devices
    md: "", // Medium screens
  });
  // Footer
  const headingSize = useBreakpointValue({
    base: "md", // Mobile devices
    md: "xl", // Medium screens
  });

  const subHeadingSize = useBreakpointValue({
    base: "sm", // Mobile devices
    md: "xl", // Medium screens
  });

  return {
    headerGif: {
      textSize,
      gifSize,
      gifPadding,
      gifMargin,
      gifButtonSize,
    },
    sponsorLogoBox: {
      imageSize,
      sponsorTitleSize,
      sponsorSubTitleSize,
      hideText,
    },
    footer: {
      headingSize,
      subHeadingSize,
    },
  };
};
