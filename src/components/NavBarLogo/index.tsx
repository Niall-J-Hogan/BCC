import { UseGetIsDevice } from "@/hooks/useGetIsDevice";
import { Box, Image } from "@chakra-ui/react";
import React from "react";

export const NavBarLogo = () => {
  const { isIpad, isIpadHorizontal, isMobile } = UseGetIsDevice();

  return (
    <>
      <Box
        position="fixed"
        top="10px"
        left={isIpad ? "" : "250px"}
        overflow="hidden"
        width="150px"
        height="150px"
        display={{ base: "none", md: "flex" }}
      >
        <Image src="/7Logo.png" alt="Logo" boxSize="100%" />
      </Box>
      <Box
        position="absolute"
        left="10px"
        top="-10px"
        overflow="hidden"
        width="100px"
        height="100px"
        display={{ base: "flex", md: "none" }}
      >
        <Image src="/7Logo.png" alt="Logo" boxSize="100%" />
      </Box>
    </>
  );
};
