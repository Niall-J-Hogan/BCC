import { Heading, Link, VStack } from "@chakra-ui/react";
import { ArticleComponent } from "@/components/ArticleComponent";
import { Footer } from "@/components/Footer";
import { HeaderGif } from "@/components/HeaderGif";
import { MobileArticleComponent } from "@/components/MobileArticleComponent";
import { NavBar } from "@/components/NavBar";
import { SponsorLogoContainer } from "@/components/SponsorLogoContainer";
import { UseGetIsDevice } from "@/hooks/useGetIsDevice";
import { UseGetSizeForDevices } from "@/hooks/useGetSizesForDevice";
import Head from "next/head";
import {
  byTattoers,
  theArtists,
  theVendors,
  theVenue,
  theVibes,
  whenIsIt,
} from "../data/copy";

export const LandingPage = () => {
  const { isIpad, isIpadHorizontal, isMobile } = UseGetIsDevice();
  const { sponsorLogoContainer } = UseGetSizeForDevices();

  const headerWidth = isMobile ? "100vw" : "80vw";

  return (
    <VStack spacing={0} backgroundColor={"#E4FDE1"}>
      <Head>
        <title>7 Hills Tattoo Convention</title>
        <meta
          name="Seven Hills Tattoo Convention | Sheffield’s Best Tattoo Convention"
          content="Seven Hills is Sheffield’s newest and best artist-run tattoo convention. Featuring the best artists from the UK and beyond, Seven Hills is by tattooers, for the people."
        />
      </Head>
      <VStack w="full" h="full">
        <NavBar />
      </VStack>

      <HeaderGif
        title={"Seven Hills Tattoo Convention"}
        subtitle={"30/08/2025 - 31/08/2025"}
        tagline="Kelham Island Museum"
        isButton={true}
      />

      <VStack
        height="auto"
        width={headerWidth}
        paddingY={"50px"}
        px={"20px"}
        gap={10}
      >
        {/* {isMobile || isIpad || isIpadHorizontal ? (
          <Heading
            as="h2"
            size={sponsorLogoContainer.headingSize}
            color="White"
            fontStyle={"italic"}
          >
            <Link href="/app/artists" backgroundColor={"red"} padding="10px">
              Artist List Announced!
            </Link>
          </Heading>
        ) : (
          <Heading
            as="h2"
            size={sponsorLogoContainer.headingSize}
            color="White"
            fontStyle={"italic"}
            px="300px"
          >
            <Link
              href="/app/artists"
              backgroundColor={"red"}
              padding="10px"
              width="300px"
            >
              Artist List Announced!
            </Link>
          </Heading>
        )} */}
        {isMobile || isIpad || isIpadHorizontal ? (
          <MobileArticleComponent
            title="By Tattooers. For The People Of Sheffield"
            articleText={byTattoers}
            image={"./kelham.jpg"}
          />
        ) : (
          <ArticleComponent
            title="By Tattooers. For The People Of Sheffield"
            articleText={byTattoers}
            image={"./kelham.jpg"}
            textOrientation="flex-end"
          />
        )}

        {isMobile || isIpad || isIpadHorizontal ? (
          <MobileArticleComponent
            title="When Is it?"
            articleText={whenIsIt}
            image={
              "https://live.staticflickr.com/65535/54264020926_8b61f05d43_c.jpg"
            }
          />
        ) : (
          <ArticleComponent
            title="When Is it?"
            articleText={whenIsIt}
            image={
              "https://live.staticflickr.com/65535/54264020926_8b61f05d43_c.jpg"
            }
            textOrientation="flex-start"
            imageOrientation="flex-end"
          />
        )}

        {isMobile || isIpad || isIpadHorizontal ? (
          <MobileArticleComponent
            title="The Artists"
            articleText={theArtists}
            image={
              "https://live.staticflickr.com/65535/54264252588_e4883ceef9_c.jpg"
            }
          />
        ) : (
          <ArticleComponent
            title="The Artists"
            articleText={theArtists}
            image={
              "https://live.staticflickr.com/65535/54264252588_e4883ceef9_c.jpg"
            }
            textOrientation="flex-end"
          />
        )}

        {isMobile || isIpad || isIpadHorizontal ? (
          <MobileArticleComponent
            title="The Venue"
            articleText={theVenue}
            image={
              "https://live.staticflickr.com/65535/54264263029_842c2d8dec_c.jpg"
            }
          />
        ) : (
          <ArticleComponent
            title="The Venue"
            articleText={theVenue}
            image={
              "https://live.staticflickr.com/65535/54264263029_842c2d8dec_c.jpg"
            }
            textOrientation="flex-start"
            imageOrientation="flex-end"
          />
        )}

        {isMobile || isIpad || isIpadHorizontal ? (
          <MobileArticleComponent
            title="The Vendors"
            articleText={theVendors}
            image={
              "https://live.staticflickr.com/65535/54264262494_a1602386fc_c.jpg"
            }
          />
        ) : (
          <ArticleComponent
            title="The Vendors"
            articleText={theVendors}
            image={
              "https://live.staticflickr.com/65535/54264262494_a1602386fc_c.jpg"
            }
            textOrientation="flex-end"
          />
        )}

        {isMobile || isIpad || isIpadHorizontal ? (
          <MobileArticleComponent
            title="The Vibes"
            articleText={theVibes}
            image={"./byTattooers.jpeg"}
          />
        ) : (
          <ArticleComponent
            title="The Vibes"
            articleText={theVibes}
            image={"./byTattooers.jpeg"}
            textOrientation="flex-start"
            imageOrientation="flex-end"
          />
        )}
      </VStack>
      <SponsorLogoContainer />

      <Footer />
    </VStack>
  );
};
