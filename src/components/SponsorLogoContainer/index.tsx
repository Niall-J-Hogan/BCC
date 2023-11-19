import { UseGetSizeForDevices } from "@/hooks/useGetSizesForDevice";
import { HStack, Heading, VStack } from "@chakra-ui/react";
import { SponsorLogoBox } from "../SponsorLogoBox/index";
export const SponsorLogoContainer = () => {
  const { sponsorLogoContainer } = UseGetSizeForDevices();

  return (
    <VStack width={"full"} marginBottom={"50px"}>
      <Heading
        as="h2"
        size={sponsorLogoContainer.headingSize}
        color="White "
        fontStyle={"italic"}
        backgroundColor={"#4900CD"}
        padding="5px"
      >
        Proudly Supported By
      </Heading>
      <HStack
        width={sponsorLogoContainer.widthSize}
        height="full"
        display={"flex"}
        justifyContent={"space-between"}
      >
        <SponsorLogoBox
          title="Barber DTS"
          subtitle="Worldwide Tattoo Supplies"
          altText="Barber Tattoo Supplies"
          imageLink="/barberLogo.png"
          websiteLink="https://www.barberdts.com/uk/"
        />
        <SponsorLogoBox
          title="OG Supply"
          subtitle="Tattoo Machines and Supplies"
          altText="OG Tattoo Supply"
          imageLink="/ogLogo.png"
          websiteLink="https://www.ogtattoosupply.com/"
        />
        <SponsorLogoBox
          title="Liquid Death"
          subtitle="Eco-friendly Water"
          altText="Liquid Death Mountain Water"
          imageLink="/LDlogo.png"
          websiteLink="https://liquiddeath.com/en-gb"
        />
      </HStack>
    </VStack>
  );
};
