import { UseGetSizeForDevices } from "@/hooks/useGetSizesForDevice";
import { handleClick } from "@/utils/handleClickNewWindow";
import { HStack, Link, Text, VStack } from "@chakra-ui/react";
export const Footer = () => {
  const { footer } = UseGetSizeForDevices();
  return (
    <VStack width="full" height="200px" backgroundColor={"#5B19D2"}>
      <HStack
        width="full"
        height="200px"
        display={"flex"}
        justifyContent={"space-evenly"}
      >
        <VStack align={"flex-start"}>
          <Text
            color="white"
            fontSize={footer.headingSize}
            fontWeight={"bolder"}
          >
            Where To Find Us?
          </Text>
          <Text color="white" fontSize={footer.subHeadingSize}>
            Alma St Sheffield S3 8SA
          </Text>
          <Text color="white" fontSize={footer.subHeadingSize}>
            Sheffield
          </Text>
          <Text color="white" fontSize={footer.subHeadingSize}>
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
          <Text
            color="white"
            fontSize={footer.headingSize}
            fontWeight={"bolder"}
          >
            Links
          </Text>
          <Link
            color="white"
            fontSize={footer.subHeadingSize}
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
            fontSize={footer.subHeadingSize}
            onClick={() =>
              handleClick("https://maps.app.goo.gl/Dv2YMaXJof475g9d7")
            }
            cursor={"pointer"}
          >
            Venue
          </Link>
          <Link
            color="white"
            fontSize={footer.subHeadingSize}
            onClick={() =>
              handleClick(
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
