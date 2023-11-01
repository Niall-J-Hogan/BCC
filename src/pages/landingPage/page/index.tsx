import { VStack, useBreakpointValue } from "@chakra-ui/react";

import { Footer } from "@/components/Footer";
import { HeaderGif } from "@/components/HeaderGif";
import { NavBar } from "@/components/NavBar";
import { SponsorLogoContainer } from "@/components/SponsorLogoContainer";

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
        <HeaderGif
          title={"A Tattoo Convention by Tattooers, for Sheffield!"}
          subtitle={"31/08/2024 - 01/09/2024"}
          tagline="Kelham Island Museum"
        />
      </VStack>
      <VStack
        height="1200px"
        backgroundColor={"#E4FDE1"}
        justifyContent={"flex-start"}
      >
        <SponsorLogoContainer />
      </VStack>

      <Footer />
    </>
  );
};
