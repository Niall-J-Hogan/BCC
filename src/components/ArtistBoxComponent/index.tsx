import React from "react";
import { Heading, VStack, Image, HStack, Text } from "@chakra-ui/react";
import { UseGetIsDevice } from "@/hooks/useGetIsDevice";

interface IArtistBoxComponent {
  imageLink: string;
  artistName: string;
  city: string;
  shopName: string;
}

export const ArtistBoxComponent = ({
  artistName,
  city,
  imageLink,
  shopName,
}: IArtistBoxComponent) => {
  const { isIpad, isIpadHorizontal, isMobile } = UseGetIsDevice();

  return (
    <VStack width={isMobile ? "full" : ""}>
      <Image
        src={imageLink}
        alt={""}
        height={"300px"}
        py="10px"
        cursor={"pointer"}
      />
      <Text
        fontSize={"xl"}
        fontWeight={"bold"}
        color="white"
        padding="5px"
        backgroundColor={"#4900CD"}
      >
        {artistName}
      </Text>
      <Text fontSize={"lg"}>{city}</Text>
      <Text fontSize={"lg"}>{shopName}</Text>
    </VStack>
  );
};
