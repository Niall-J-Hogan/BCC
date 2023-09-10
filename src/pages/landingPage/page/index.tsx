import {
  Box,
  Button,
  HStack,
  Heading,
  Text,
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
      <VStack
        height="1200px"
        backgroundColor={"#E4FDE1"}
        justifyContent={"flex-start"}
      >
        <HStack marginTop={"50px"}>
          <Text fontSize={"xl"}>Hellos</Text>
        </HStack>
      </VStack>
    </>
  );
};
