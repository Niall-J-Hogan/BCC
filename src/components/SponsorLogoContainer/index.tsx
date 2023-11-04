import { HStack, useBreakpointValue } from "@chakra-ui/react";
import { SponsorLogoBox } from "../SponsorLogoBox/index";
export const SponsorLogoContainer = () => {
  const widthSize = useBreakpointValue({
    base: "100vw", // Mobile devices
    md: "60vw", // Medium screens
  });

  return (
    <HStack
      width={widthSize}
      height="full"
      display={"flex"}
      justifyContent={"space-between"}
    >
      <SponsorLogoBox
        title="Barbers"
        subtitle="Worldwide Tattoo Supplies"
        altText="Barber Tattoo Supplies"
        imageLink="/barberLogo.png"
        websiteLink="https://www.barberdts.com/uk/"
      />
      <SponsorLogoBox
        title="OG Supply"
        subtitle="   Tattoo Machines and Supplies"
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
  );
};
