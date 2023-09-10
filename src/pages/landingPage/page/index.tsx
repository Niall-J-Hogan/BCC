import {
  Box,
  Button,
  Heading,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

import { NavBar } from "@/components/NavBar";

export const LandingPage = () => {
  const headingSize = useBreakpointValue({
    base: "md", // Mobile devices
    md: "2xl", // Medium screens
  });

  const buttonSize = useBreakpointValue({
    base: "md", // Mobile devices
    md: "lg", // Large screens and up
  });

  const headerMargin = useBreakpointValue({
    base: "70px", // Mobile devices
    md: "65px", // Large screens and up
  });

  const title: string = "Sheffield's Premier Tattoo Convention";
  return (
    <>
      <VStack w="full" h="full" spacing={5}>
        <NavBar />
      </VStack>
      <VStack marginTop={headerMargin} height="full">
        <Box
          backgroundImage={`/Video.gif`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          width="100vw"
          h="60vh"
        >
          <VStack spacing={10} height="full" justifyContent={"center"}>
            <Heading
              as="h2"
              size={headingSize}
              color="#FEFAE0"
              zIndex={99}
              backgroundColor={"#4900CD"}
              flexWrap={"nowrap"}
              padding={"5px"}
            >
              {title}
            </Heading>
            <Button size={buttonSize} backgroundColor={"#CDAF00"} color="white">
              Click For Tickets
            </Button>
          </VStack>
        </Box>
      </VStack>
    </>
  );
};
