import { VStack, Heading, Image } from "@chakra-ui/react";
export const HomePage = () => {
  return (
    <VStack w="100vw" h="100vh" backgroundColor="hsla(238, 100%, 80%, 1)">
      <Image src={"/7Logo.png"} alt={"Logo"} boxSize={"700px"} margin="auto" />
      <Heading as="h2" size="2xl" margin="auto" color={"#4900CD"}>
        + Coming Soon +
      </Heading>
    </VStack>
  );
};
