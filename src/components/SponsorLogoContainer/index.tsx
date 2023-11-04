import { HStack, Text, Image, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
export const SponsorLogoContainer = () => {
  const router = useRouter();
  return (
    <HStack
      width={"60vw"}
      height="full"
      display={"flex"}
      justifyContent={"space-between"}
    >
      <VStack width={"50vw"} height="full">
        <Image
          src="/barberLogo.png"
          alt=""
          height="200px"
          py="5px"
          onClick={() => router.push("https://www.barberdts.com/uk/")}
          cursor={"pointer"}
        />
        <Text fontSize={"xl"}>Barbers</Text>
        <Text fontSize={"md"} fontStyle={"italic"}>
          Worldwide Tattoo Supplies
        </Text>
      </VStack>

      <VStack width={"50vw"} height="full">
        <Image
          src="/ogLogo.png"
          alt=""
          height="200px"
          py="5px"
          onClick={() => router.push("https://www.ogtattoosupply.com/")}
          cursor={"pointer"}
        />
        <Text fontSize={"xl"}>OG Supply</Text>
        <Text fontSize={"md"} fontStyle={"italic"}>
          Tattoo Machines and Supplies
        </Text>
      </VStack>
      <VStack width={"50vw"} height="full">
        <Image
          src="/LDlogo.png"
          alt=""
          height="200px"
          py="5px"
          onClick={() => router.push("https://liquiddeath.com/en-gb")}
          cursor={"pointer"}
        />
        <Text fontSize={"xl"}>Liquid Death</Text>
        <Text fontSize={"md"} fontStyle={"italic"}>
          Environmentally Friendly Water
        </Text>
      </VStack>
    </HStack>
  );
};
