import { HStack, Heading, VStack, Text } from "@chakra-ui/react";

import { ArtistBoxComponent } from "@/components/ArtistBoxComponent";
import { Footer } from "@/components/Footer";
import { HeaderGif } from "@/components/HeaderGif";
import { NavBar } from "@/components/NavBar";
import { SponsorLogoContainer } from "@/components/SponsorLogoContainer";
import { ARTIST_DATA } from "../data";
import { useState } from "react";

export const ArtistPage = () => {
  const [screenState, setScreenState] = useState<string>("2025");

  const onClick = (year: string) => {
    setScreenState(year);
  };

  return (
    <VStack spacing={0} backgroundColor={"#E4FDE1"}>
      <VStack w="full" h="full">
        <NavBar />
      </VStack>

      <HeaderGif
        title={"Seven Hills Tattoo Convention"}
        subtitle={"30/08/2025 - 31/08/2025"}
        tagline="Kelham Island Museum"
        isButton={true}
      />

      <VStack height="auto" width="full" paddingY={"50px"} gap={10}>
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
          width={"150px"}
          height={"40px"}
          border={"solid 2px #5B19D2"}
          borderRadius={"10px"}
          justify={"center"}
        >
          <HStack width={"130px"} height={"40px"} justify={"space-between"}>
            <Text
              background={screenState === "2025" ? "#979BFF" : ""}
              px={"10px"}
              borderRadius={"10px"}
              color={screenState === "2025" ? "white" : "black"}
              onClick={() => onClick("2025")}
              cursor={"pointer"}
            >
              2025
            </Text>
            <Text
              background={screenState === "2024" ? "#979BFF" : ""}
              px={"10px"}
              borderRadius={"10px"}
              color={screenState === "2024" ? "white" : "black"}
              onClick={() => onClick("2024")}
              cursor={"pointer"}
            >
              2024
            </Text>
          </HStack>
        </HStack>

        {screenState === "2024" && (
          <HStack
            display={"flex"}
            w="80%"
            h="full"
            justifyContent={"space-evenly"}
            alignItems=""
            flexWrap={"wrap"}
          >
            {!!ARTIST_DATA &&
              ARTIST_DATA.map((item) => (
                <ArtistBoxComponent
                  key={item.instaHandle}
                  artistName={item.artistName}
                  imageLink={`/artists/${item.artistName.replace(
                    /\s+/g,
                    ""
                  )}.jpeg`}
                  instaHandle={item.instaHandle}
                />
              ))}
          </HStack>
        )}
        {screenState === "2025" && (
          <HStack height={"300px"}>
            <Text fontSize={"48px"} textAlign={"center"}>
              2025 Artist List Coming Soon!{" "}
            </Text>
          </HStack>
        )}
      </VStack>
      <SponsorLogoContainer />

      <Footer />
    </VStack>
  );
};
