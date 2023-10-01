import { HStack, Text, VStack } from "@chakra-ui/react";
export const Footer = () => {
  return (
    <VStack width="full" height="200px" backgroundColor={"#5B19D2"}>
      <HStack
        width="full"
        height="200px"
        display={"flex"}
        justifyContent={"space-evenly"}
      >
        <VStack align={"flex-start"}>
          <Text color="white" fontSize={"xl"} fontWeight={"bolder"}>
            Where To Find Us?
          </Text>
          <Text color="white">Alma St Sheffield S3 8SA</Text>
          <Text color="white">Sheffield</Text>
          <Text color="white">S3 8SA</Text>
        </VStack>
        <VStack align={"flex-start"}>
          <Text color="white" fontSize={"xl"} fontWeight={"bolder"}>
            FAQ
          </Text>
          <Text color="white">Parking</Text>
          <Text color="white">What To Bring?</Text>
          <Text color="white">Tattoo Aftercare?</Text>
        </VStack>
        <VStack align={"flex-start"}>
          <Text color="white" fontSize={"xl"} fontWeight={"bolder"}>
            Links
          </Text>
          <Text color="white">Instagram</Text>
          <Text color="white">Maps</Text>
          <Text color="white">Venue</Text>
        </VStack>
      </HStack>
    </VStack>
  );
};
