import React from "react";
import {
  Box,
  Button,
  Heading,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export const HeaderGif = () => {
  const headingSize = useBreakpointValue({
    base: "md", // Mobile devices
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

  const title: string = "Sheffield's Premier Tattoo Convention";

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
          <Button size={buttonSize} backgroundColor={"#CDAF00"} color="white">
            Click For Tickets
          </Button>
        </VStack>
      </Box>
    </>
  );
};
