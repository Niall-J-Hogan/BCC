import { HStack, Text, VStack, useBreakpointValue } from "@chakra-ui/react";
export const Footer = () => {
  const headingSize = useBreakpointValue({
    base: "md", // Mobile devices
    md: "xl", // Medium screens
  });

  const displayMaps = useBreakpointValue({
    base: "none", // Mobile devices
    md: "inline-flex", // Medium screens
  });

  const subHeadingSize = useBreakpointValue({
    base: "sm", // Mobile devices
    md: "xl", // Medium screens
  });
  return (
    <VStack width="full" height="200px" backgroundColor={"#5B19D2"}>
      <HStack
        width="full"
        height="200px"
        display={"flex"}
        justifyContent={"space-evenly"}
      >
        <VStack align={"flex-start"} display={displayMaps}>
          <Text color="white" fontSize={headingSize} fontWeight={"bolder"}>
            Where To Find Us?
          </Text>
          <Text color="white">Alma St Sheffield S3 8SA</Text>
          <Text color="white">Sheffield</Text>
          <Text color="white">S3 8SA</Text>
        </VStack>
        <VStack align={"flex-start"}>
          <Text color="white" fontSize={headingSize} fontWeight={"bolder"}>
            FAQ
          </Text>
          <Text color="white" fontSize={subHeadingSize}>
            Parking
          </Text>
          <Text color="white" fontSize={subHeadingSize}>
            What To Bring?
          </Text>
          <Text color="white" fontSize={subHeadingSize}>
            Tattoo Aftercare?
          </Text>
        </VStack>
        <VStack align={"flex-start"}>
          <Text color="white" fontSize={headingSize} fontWeight={"bolder"}>
            Links
          </Text>
          <Text color="white" fontSize={subHeadingSize}>
            Instagram
          </Text>
          <Text color="white" fontSize={subHeadingSize}>
            Maps
          </Text>
          <Text color="white" fontSize={subHeadingSize}>
            Venue
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
};
