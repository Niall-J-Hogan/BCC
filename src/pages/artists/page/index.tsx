import { Button, VStack, useBreakpointValue } from "@chakra-ui/react";

import { Footer } from "@/components/Footer";
import { HeaderGif } from "@/components/HeaderGif";
import { NavBar } from "@/components/NavBar";
import { SponsorLogoContainer } from "@/components/SponsorLogoContainer";

export const ArtistPage = () => {
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
          title="Artists"
          subtitle="We have a range of artists from around the world, covering every style."
          isButton={true}
          tagline={
            <Button
              size={"lg"}
              width="300px"
              color={"white"}
              backgroundColor={"#CDAF00"}
            >
              Apply as an Artist
            </Button>
          }
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
