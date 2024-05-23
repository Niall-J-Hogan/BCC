import React from "react";
import { Heading, VStack, Image, HStack, Text, Box } from "@chakra-ui/react";
import { UseGetIsDevice } from "@/hooks/useGetIsDevice";
import { SlSocialInstagram } from "react-icons/sl";
import { handleClick } from "@/utils/handleClickNewWindow";

interface IArtistBoxComponent {
  imageLink: string;
  artistName: string;
  instaHandle: string;
}

export const ArtistBoxComponent = ({
  artistName,
  imageLink,
  instaHandle,
}: IArtistBoxComponent) => {
  const { isMobile } = UseGetIsDevice();

  return (
    <VStack width={isMobile ? "full" : ""}>
      <Box
        position="relative"
        overflow="hidden"
        height="auto"
        width="auto"
        display="inline-block"
        border="solid 3px transparent"
        _hover={{
          "> img": {
            transform: "scale(1.4)",
            opacity: 0.5,
          },
          "> .overlay": {
            opacity: 1,
          },
          border: "solid 3px #5B19D2",
        }}
        transition="transform 0.3s ease, border 0.3s ease"
      >
        <Image
          src={imageLink}
          alt={`A tattoo by ${artistName}`}
          height="300px"
          py="10px"
          cursor="pointer"
          transition="transform 0.3s ease, opacity 0.3s ease"
        />
        <Box
          className="overlay"
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          backgroundColor="rgba(0, 0, 0, 0.6)" // Black with 60% opacity
          opacity={0}
          color="white"
          fontWeight="bold"
          fontSize="xl"
          transition="opacity 0.3s ease"
          cursor="pointer"
          onClick={() =>
            handleClick(`https://www.instagram.com/${instaHandle}`)
          }
        >
          <SlSocialInstagram size={32} color="white" />
        </Box>
      </Box>

      <Text
        fontSize="lg"
        fontWeight="bold"
        fontStyle="italic"
        color="black"
        padding="5px"
        onClick={() => handleClick(`https://www.instagram.com/${instaHandle}`)}
        cursor="pointer"
      >
        @{instaHandle}
      </Text>
    </VStack>
  );
};
