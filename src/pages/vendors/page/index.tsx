import { Button, VStack } from "@chakra-ui/react";

import { Footer } from "@/components/Footer";
import { HeaderGif } from "@/components/HeaderGif";
import { NavBar } from "@/components/NavBar";
import { SponsorLogoContainer } from "@/components/SponsorLogoContainer";

export const VendorPage = () => {
  return (
    <VStack spacing={0} backgroundColor={"#E4FDE1"}>
      <VStack w="full" h="full">
        <NavBar />
      </VStack>

      <HeaderGif
        title="Vendors"
        subtitle="Lots of food available"
        isButton={true}
        tagline={
          <Button
            size={"lg"}
            width="200px"
            color={"white"}
            backgroundColor={"#CDAF00"}
          >
            Apply as a Vendor
          </Button>
        }
      />
      <SponsorLogoContainer />

      <VStack height="1200px" width="80%" border={"solid 2px black"}></VStack>

      <Footer />
    </VStack>
  );
};
