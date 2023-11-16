import {
  HStack,
  Link,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
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

  const handleClick = (websiteLink: string) => {
    if (websiteLink) {
      window.open(
        websiteLink,
        "_blank" // <- This is what makes it open in a new window.
      );
    }
  };
  return (
    <VStack width="full" height="200px" backgroundColor={"#5B19D2"}>
      <HStack
        width="full"
        height="200px"
        display={"flex"}
        justifyContent={"space-evenly"}
      >
        <VStack align={"flex-start"}>
          <Text color="white" fontSize={headingSize} fontWeight={"bolder"}>
            Where To Find Us?
          </Text>
          <Text color="white" fontSize={subHeadingSize}>
            Alma St Sheffield S3 8SA
          </Text>
          <Text color="white" fontSize={subHeadingSize}>
            Sheffield
          </Text>
          <Text color="white" fontSize={subHeadingSize}>
            S3 8SA
          </Text>
        </VStack>
        {/* <VStack align={"flex-start"}>
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
        </VStack> */}
        <VStack align={"flex-start"}>
          <Text color="white" fontSize={headingSize} fontWeight={"bolder"}>
            Links
          </Text>
          <Link
            color="white"
            fontSize={subHeadingSize}
            onClick={() =>
              handleClick(
                "https://www.instagram.com/sevenhillstattooconvention"
              )
            }
          >
            Instagram
          </Link>

          <Link
            color="white"
            fontSize={subHeadingSize}
            onClick={() =>
              handleClick("https://maps.app.goo.gl/Dv2YMaXJof475g9d7")
            }
            cursor={"pointer"}
          >
            Venue
          </Link>
          <Link
            color="white"
            fontSize={subHeadingSize}
            onClick={() =>
              window.open(
                "mailto:sevenhillstattooconvention@gmail.com?subject=Website%20enquiry"
              )
            }
            cursor={"pointer"}
          >
            Contact Us
          </Link>
        </VStack>
      </HStack>
    </VStack>
  );
};
