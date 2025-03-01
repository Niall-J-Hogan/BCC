import { UseGetSizeForDevices } from "@/hooks/useGetSizesForDevice";
import { HStack, Heading, VStack } from "@chakra-ui/react";
import { SponsorLogoBox } from "../SponsorLogoBox/index";
import { UseGetIsDevice } from "@/hooks/useGetIsDevice";
export const SponsorLogoContainer = () => {
  const { sponsorLogoContainer } = UseGetSizeForDevices();
  const { isMobile, isIpad } = UseGetIsDevice();
  const textSize = isMobile ? "18px" : "28px";
  return (
    <VStack width={"full"} marginBottom={"50px"}>
      <Heading
        as="h2"
        fontSize={textSize}
        size={sponsorLogoContainer.headingSize}
        color="White "
        fontStyle={"italic"}
        backgroundColor={"#4900CD"}
        padding="5px"
      >
        Proudly Supported By...
      </Heading>
      <HStack
        width={isIpad ? "95vw" : sponsorLogoContainer.widthSize}
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
        {/* <SponsorLogoBox
          title="OG Supply"
          subtitle="Tattoo Machines and Supplies"
          altText="OG Tattoo Supply"
          imageLink="/ogLogo.png"
          websiteLink="https://www.ogtattoosupply.com/"
        /> */}
        <SponsorLogoBox
          title="Liquid Death"
          subtitle="Eco-friendly Water"
          altText="Liquid Death Mountain Water"
          imageLink="/LDlogo.png"
          websiteLink="https://liquiddeath.com/en-gb"
        />
        {/* {     </HStack>
      <HStack
        width={sponsorLogoContainer.widthSize}
        height="full"
        display={"flex"}
        justifyContent={"space-between"}
        wrap={"unset"}
      >} */}
        <SponsorLogoBox
          title="Clear Lase"
          subtitle="Expert Tattoo Removal"
          altText="Clear Lase"
          imageLink="/clearLase.png"
          websiteLink="https://www.clearlase.co.uk/"
        />

        <SponsorLogoBox
          title="Parliament Merch"
          subtitle="On Demand Merchandise "
          altText="Clear Lase"
          imageLink="/parliment.png"
          websiteLink="https://parliamentmerch.com/"
        />
      </HStack>
    </VStack>
  );
};
