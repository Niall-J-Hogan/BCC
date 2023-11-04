import { VStack, useBreakpointValue } from "@chakra-ui/react";

import { Footer } from "@/components/Footer";
import { HeaderGif } from "@/components/HeaderGif";
import { NavBar } from "@/components/NavBar";
import { SponsorLogoContainer } from "@/components/SponsorLogoContainer";
import { DrawingApp } from "@/components/PaintComponent/App";

export const Draw = () => {
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
        <DrawingApp />
      </VStack>

      <Footer />
    </>
  );
};
