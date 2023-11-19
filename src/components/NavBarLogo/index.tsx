import { Box, Image } from "@chakra-ui/react";
import React from "react";

export const NavBarLogo = () => {
  return (
    <>
      <Box
        position="absolute"
        top="-10px"
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
