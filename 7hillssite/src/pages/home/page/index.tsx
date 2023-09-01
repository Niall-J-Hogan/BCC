import {
  VStack,
  Heading,
  Image,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";
export const HomePage = () => {
  const boxSize = useBreakpointValue({
    base: "300px", // Mobile devices
    sm: "400px", // Small screens
    md: "500px", // Medium screens
    lg: "700px", // Large screens and up
  });

  //backgroundColor="hsla(238, 100%, 80%, 1)"
  return (
    <Box
      backgroundImage={`tempBackround.jpg`} // Replace with your image path
      opacity={0.9}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      p={4} // Adjust padding as needed
      h="100vh"
      w="100vw"
    >
      <VStack margin={"auto"} spacing={10}>
        <Image src={"/7Logo.png"} alt={"Logo"} boxSize={boxSize} />
        <Heading as="h2" size="2xl" color={"white"}>
          + Coming Soon +
        </Heading>
      </VStack>
    </Box>
  );
};
