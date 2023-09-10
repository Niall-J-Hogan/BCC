import {
  Box,
  Button,
  Heading,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

import { NavBar } from "@/components/NavBar";
import { HeaderGif } from "@/components/HeaderGif";

export const LandingPage = () => {
  const headerMargin = useBreakpointValue({
    base: "70px", // Mobile devices
    md: "65px", // Large screens and up
  });

  return (
    <>
      <VStack w="full" h="full" spacing={5}>
        <NavBar />
      </VStack>
      <VStack marginTop={headerMargin} height="full">
        <HeaderGif />
      </VStack>
    </>
  );
};
