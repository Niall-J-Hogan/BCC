import { Heading, VStack, Image, HStack, Text } from "@chakra-ui/react";

import { Footer } from "@/components/Footer";
import { HeaderGif } from "@/components/HeaderGif";
import { NavBar } from "@/components/NavBar";
import { SponsorLogoContainer } from "@/components/SponsorLogoContainer";
import { UseGetIsDevice } from "@/hooks/useGetIsDevice";
import { UseGetSizeForDevices } from "@/hooks/useGetSizesForDevice";
import { copy } from "../data";
import { ArtistBoxComponent } from "@/components/ArtistBoxComponent";

export const ArtistPage = () => {
  const { isIpad, isIpadHorizontal, isMobile } = UseGetIsDevice();
  const { sponsorLogoContainer } = UseGetSizeForDevices();

  return (
    <VStack spacing={0} backgroundColor={"#E4FDE1"}>
      <VStack w="full" h="full">
        <NavBar />
      </VStack>

      <HeaderGif
        title={"Seven Hills Tattoo Convention"}
        subtitle={"31/08/2024 - 01/09/2024"}
        tagline="Kelham Island Museum"
        isButton={true}
      />

      <VStack height="auto" width="80%" paddingY={"50px"} gap={10}>
        <Heading
          as="h1"
          size={"2xl"}
          color="black  "
          padding={"5px"}
          fontStyle={"italic"}
          alignSelf={"center"}
          borderBottom={"solid 2px black"}
        >
          Artists
        </Heading>

        <HStack
          display={"flex"}
          w="auto"
          h="full"
          justifyContent={"flex-start"}
          flexWrap={"wrap"}
        >
          <ArtistBoxComponent
            artistName="Nick Mayes"
            imageLink="/artists/NickMayes.jpg"
            city="Scarborough, UK"
            shopName="North Sea Tattoo"
          />
          <ArtistBoxComponent
            artistName="Nick Mayes"
            imageLink="/artists/NickMayes.jpg"
            city="Scarborough, UK"
            shopName="North Sea Tattoo"
          />{" "}
          <ArtistBoxComponent
            artistName="Nick Mayes"
            imageLink="/artists/NickMayes.jpg"
            city="Scarborough, UK"
            shopName="North Sea Tattoo"
          />{" "}
          <ArtistBoxComponent
            artistName="Nick Mayes"
            imageLink="/artists/NickMayes.jpg"
            city="Scarborough, UK"
            shopName="North Sea Tattoo"
          />{" "}
          <ArtistBoxComponent
            artistName="Nick Mayes"
            imageLink="/artists/NickMayes.jpg"
            city="Scarborough, UK"
            shopName="North Sea Tattoo"
          />{" "}
          <ArtistBoxComponent
            artistName="Nick Mayes"
            imageLink="/artists/NickMayes.jpg"
            city="Scarborough, UK"
            shopName="North Sea Tattoo"
          />{" "}
          <ArtistBoxComponent
            artistName="Nick Mayes"
            imageLink="/artists/NickMayes.jpg"
            city="Scarborough, UK"
            shopName="North Sea Tattoo"
          />{" "}
          <ArtistBoxComponent
            artistName="Nick Mayes"
            imageLink="/artists/NickMayes.jpg"
            city="Scarborough, UK"
            shopName="North Sea Tattoo"
          />{" "}
          <ArtistBoxComponent
            artistName="Nick Mayes"
            imageLink="/artists/NickMayes.jpg"
            city="Scarborough, UK"
            shopName="North Sea Tattoo"
          />{" "}
          <ArtistBoxComponent
            artistName="Nick Mayes"
            imageLink="/artists/NickMayes.jpg"
            city="Scarborough, UK"
            shopName="North Sea Tattoo"
          />{" "}
          <ArtistBoxComponent
            artistName="Nick Mayes"
            imageLink="/artists/NickMayes.jpg"
            city="Scarborough, UK"
            shopName="North Sea Tattoo"
          />
        </HStack>

        {/* <HStack width={isMobile || isIpad || isIpadHorizontal ? "100%" : "70%"}>
          {isMobile || isIpad || isIpadHorizontal ? (
            <Text
              as="article"
              lineHeight={"9"}
              fontWeight={"semibold"}
              whiteSpace="pre-line"
              py="10px"
              textAlign={"center"}
            >
              {copy}
            </Text>
          ) : (
            <Text
              as="article"
              paddingX="40px"
              lineHeight={"9"}
              fontWeight={"semibold"}
              whiteSpace="pre-line"
              align={"center"}
            >
              {copy}
            </Text>
          )}
        </HStack>

        {isMobile || isIpad || isIpadHorizontal ? (
          <Heading
            as="h2"
            size={sponsorLogoContainer.headingSize}
            color="White"
            fontStyle={"italic"}
            backgroundColor={"red"}
            padding="10px"
          >
            ARTIST LIST COMING SOON!
          </Heading>
        ) : (
          <Heading
            as="h2"
            size={sponsorLogoContainer.headingSize}
            color="White"
            fontStyle={"italic"}
            backgroundColor={"red"}
            padding="20px"
            px="300px"
          >
            FULL ARTIST LIST COMING SOON!
          </Heading>
        )} */}
      </VStack>
      <SponsorLogoContainer />

      <Footer />
    </VStack>
  );
};
