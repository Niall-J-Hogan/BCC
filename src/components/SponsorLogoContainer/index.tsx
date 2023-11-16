import { HStack, Heading, VStack, useBreakpointValue } from "@chakra-ui/react";
import { SponsorLogoBox } from "../SponsorLogoBox/index";
export const SponsorLogoContainer = () => {
  const widthSize = useBreakpointValue({
    base: "100vw", // Mobile devices
    md: "60vw", // Medium screens
  });

  const headingSize = useBreakpointValue({
    base: "md", // Mobile devices
    md: "xl", // Medium screens
  });

  return (
    <VStack width={"full"} marginBottom={"50px"}>
      <Heading
        as="h2"
        size={headingSize}
        color="White "
        fontStyle={"italic"}
        backgroundColor={"#4900CD"}
        padding="5px"
      >
        Proudly Supported By
      </Heading>
      <HStack
        width={widthSize}
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
          subtitle="Environmentally Friendly Water"
          altText="Liquid Death Mountain Water"
          imageLink="/LDlogo.png"
          websiteLink="https://liquiddeath.com/en-gb"
        />
      </HStack>
    </VStack>
  );
};
