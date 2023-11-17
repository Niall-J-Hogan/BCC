import React from "react";
import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

interface IHeaderGif {
  title?: string;
  subtitle?: string;
  tagline?: any;
  isButton?: boolean;
}
export const HeaderGif = ({
  title,
  subtitle,
  tagline,
  isButton = false,
}: IHeaderGif) => {
  const headingSize = useBreakpointValue({
    base: "sm", // Mobile devices
    md: "2xl", // Medium screens
  });

  const gifSize = useBreakpointValue({
    base: "50vh", // Mobile devices
    md: "60vh", // Large screens and up
  });
  const headerMargin = useBreakpointValue({
    base: "65px", // Mobile devices
    md: "60px", // Large screens and up
  });
  const gifMargin = useBreakpointValue({
    base: "8px", // Mobile devices
    md: "6px", // Large screens and up
  });

  const buttonSize = useBreakpointValue({
    base: "80%", // Mobile devices
    md: "35%", // Large screens and up
  });

  return (
    <VStack marginTop={headerMargin} height="full" paddingTop={gifMargin}>
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
          {title && (
            <Heading
              as="h2"
              size={headingSize}
              color="#FEFAE0"
              backgroundColor={"#4900CD"}
              padding={"5px"}
              fontStyle={"italic"}
            >
              {title}
            </Heading>
          )}
          {tagline && (
            <Heading
              as="h4"
              size={headingSize}
              color="#CDAF00"
              zIndex={99}
              flexWrap={"nowrap"}
              padding={"5px"}
              backgroundColor={"#4900CD"}
            >
              {tagline}
            </Heading>
          )}
          {subtitle && (
            <Text
              fontSize={headingSize}
              padding={"5px"}
              color="white"
              backgroundColor={"#4900CD"}
              textAlign={"center"}
            >
              {subtitle}
            </Text>
          )}
          {isButton && (
            <Button
              color={"white"}
              backgroundColor={"#CDAF00"}
              size={"lg"}
              width={buttonSize}
            >
              Artist Application
            </Button>
          )}
        </VStack>
      </Box>
    </VStack>
  );
};
