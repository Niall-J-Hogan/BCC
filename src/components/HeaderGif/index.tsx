import React from "react";
import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export const HeaderGif = () => {
  const headingSize = useBreakpointValue({
    base: "sm", // Mobile devices
    md: "2xl", // Medium screens
  });

  const buttonSize = useBreakpointValue({
    base: "md", // Mobile devices
    md: "lg", // Large screens and up
  });

  const gifSize = useBreakpointValue({
    base: "50vh", // Mobile devices
    md: "60vh", // Large screens and up
  });

  const title: string = "A Tattoo Convention by Tattooers, for Sheffield!";

  return (
    <>
      {" "}
      <Box
        backgroundImage={`/Video.gif`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        width="100vw"
        h={gifSize}
      >
        <VStack
          spacing={10}
          height="full"
          justifyContent={"center"}
          margin={"auto"}
        >
          <Heading
            as="h2"
            size={headingSize}
            color="#FEFAE0"
            backgroundColor={"#4900CD"}
            padding={"5px"}
          >
            {title}
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
            as="h4"
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
    </>
  );
};
