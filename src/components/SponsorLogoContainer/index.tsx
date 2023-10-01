import { HStack, Image, VStack } from "@chakra-ui/react";
export const SponsorLogoContainer = () => {
  return (
    <VStack>
      <HStack
        width={"50vw"}
        height="200px"
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Image src="/barberLogo.png" alt="" height="inherit" py="5px" />
        <Image src="/ogLogo.png" alt="" height="inherit" py="5px" />
        <Image src="/LDlogo.png" alt="" height="inherit" py="5px" />
      </HStack>
    </VStack>
  );
};
