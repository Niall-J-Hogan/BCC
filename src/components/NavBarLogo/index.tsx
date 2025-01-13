import { Box, Image } from "@chakra-ui/react";
import React from "react";

export const NavBarLogo = () => {
  return (
    <Box
      position="absolute"
      top="-10px"
      left={"-90px"}
      overflow="hidden"
      width="150px"
      height="150px"
      display={{ base: "none", md: "flex" }}
    >
      <Image src="/7Logo.png" alt="Logo" boxSize="100%" />
    </Box>
  );
};
