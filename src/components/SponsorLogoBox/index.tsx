import React from "react";
import { VStack, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface ISponsorLogoBox {
  title: string;
  subtitle: string;
  imageLink: string;
  websiteLink: string;
  altText: string;
}

export const SponsorLogoBox = ({
  title,
  subtitle,
  imageLink,
  websiteLink,
  altText,
}: ISponsorLogoBox) => {
  const gifSize = useBreakpointValue({
    base: "100px", // Mobile devices
    md: "200px", // Large screens and up
  });

  const headingSize = useBreakpointValue({
    base: "sm", // Mobile devices
    md: "2xl", // Medium screens
  });
  const subHeadingSize = useBreakpointValue({
    base: "sm", // Mobile devices
    md: "xl", // Medium screens
  });

  const widthSize = useBreakpointValue({
    base: "100vw", // Mobile devices
    md: "60vw", // Medium screens
  });
  const hideText = useBreakpointValue({
    base: "none", // Mobile devices
    md: "", // Medium screens
  });

  const handleClick = () => {
    if (websiteLink) {
      window.open(
        websiteLink,
        "_blank" // <- This is what makes it open in a new window.
      );
    }
  };

  return (
    <VStack width={"50vw"} height="full">
      <Image
        src={imageLink}
        alt={altText}
        height={gifSize}
        py="5px"
        onClick={handleClick}
        cursor={"pointer"}
      />
      <Text fontSize={headingSize} display={hideText}>
        {title}
      </Text>
      <Text fontSize={subHeadingSize} fontStyle={"italic"} display={hideText}>
        {subtitle}
      </Text>
    </VStack>
  );
};
