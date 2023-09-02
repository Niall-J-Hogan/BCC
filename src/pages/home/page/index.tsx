import {
  VStack,
  Heading,
  Image,
  useBreakpointValue,
  Box,
  Text,
} from "@chakra-ui/react";
export const HomePage = () => {
  const boxSize = useBreakpointValue({
    base: "xxs", // Mobile devices
    sm: "500px", // Small screens
    md: "600px", // Medium screens
    lg: "700px", // Large screens and up
  });

  const headingSize = useBreakpointValue({
    base: "md", // Mobile devices
    sm: "xl", // Small screens
    md: "2xl", // Medium screens
    lg: "2xl", // Large screens and up
  });

  //backgroundColor="hsla(238, 100%, 80%, 1)"
  return (
    <Box
      backgroundImage={`Video.gif`} // Replace with your image path
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      minH="100vh"
      w="100vw"
      margin={"auto"}
      px={10}
    >
      <VStack spacing={3} width="full" minH="100vh" justifyContent={"center"}>
        <Image
          src={"/7Logo.png"}
          alt={"Logo"}
          boxSize={boxSize}
          opacity={0.9}
        />
        <Heading
          as="h2"
          size={headingSize}
          color="#CDAF00"
          zIndex={99}
          backgroundColor={"#4900CD"}
          flexWrap={"nowrap"}
          dropShadow={"100px"}
          padding={"5px"}
        >
          Sheffield
        </Heading>
        <Text
          fontSize={headingSize}
          padding={"5px"}
          color="white"
          backgroundColor={"#4900CD"}
        >
          31/08/2024 - 01/09/2024
        </Text>
        <Heading
          as="h2"
          size={headingSize}
          color="#CDAF00"
          zIndex={99}
          flexWrap={"nowrap"}
          padding={"5px"}
          backgroundColor={"#4900CD"}
        >
          Kelham Island Museum
        </Heading>
      </VStack>
    </Box>
  );
};
