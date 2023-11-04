import { VStack, useBreakpointValue } from "@chakra-ui/react";

import { Footer } from "@/components/Footer";
import { HeaderGif } from "@/components/HeaderGif";
import { NavBar } from "@/components/NavBar";
import { SponsorLogoContainer } from "@/components/SponsorLogoContainer";

export const LandingPage = () => {
  return (
    <VStack spacing={0} backgroundColor={"#E4FDE1"}>
      <VStack w="full" h="full">
        <NavBar />
      </VStack>

      <HeaderGif
        title={"A Tattoo Convention by Tattooers, for Sheffield!"}
        subtitle={"31/08/2024 - 01/09/2024"}
        tagline="Kelham Island Museum"
      />

      <SponsorLogoContainer />

      <VStack height="1200px" width="80%" border={"solid 2px black"}></VStack>

      <Footer />
    </VStack>
  );
};
