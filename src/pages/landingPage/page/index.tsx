import { VStack, useMediaQuery } from "@chakra-ui/react";

import { ArticleComponent } from "@/components/ArticleComponent";
import { Footer } from "@/components/Footer";
import { HeaderGif } from "@/components/HeaderGif";
import { MobileArticleComponent } from "@/components/MobileArticleComponent";
import { NavBar } from "@/components/NavBar";
import { SponsorLogoContainer } from "@/components/SponsorLogoContainer";
import { byTattoers, theVendors, theVenue, whenIsIt } from "../data/copy";

export const LandingPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <VStack spacing={0} backgroundColor={"#E4FDE1"}>
      <VStack w="full" h="full">
        <NavBar />
      </VStack>

      <HeaderGif
        title={"Seven Hills Tattoo Convention"}
        subtitle={"01/09/2024 - 02/09/2024"}
        tagline="Kelham Island Museum"
      />

      <VStack height="auto" width="80%" paddingY={"50px"}>
        {isMobile ? (
          <MobileArticleComponent
            title="By Tattooers. For The People Of Sheffield"
            articleText={byTattoers}
            image={"/kelham.jpg"}
          />
        ) : (
          <ArticleComponent
            title="By Tattooers. For The People Of Sheffield"
            articleText={byTattoers}
            image={"/kelham.jpg"}
            textOrientation="flex-end"
          />
        )}

        {isMobile ? (
          <MobileArticleComponent
            title="When Is it?"
            articleText={whenIsIt}
            image={"/foundry.jpeg"}
          />
        ) : (
          <ArticleComponent
            title="When Is it?"
            articleText={whenIsIt}
            image={"/foundry.jpeg"}
            textOrientation="flex-start"
            imageOrientation="flex-end"
          />
        )}

        {isMobile ? (
          <MobileArticleComponent
            title="The Venue"
            articleText={theVenue}
            image={"/kelham.jpg"}
          />
        ) : (
          <ArticleComponent
            title="The Venue"
            articleText={theVenue}
            image={"/kelham.jpg"}
            textOrientation="flex-end"
          />
        )}

        {isMobile ? (
          <MobileArticleComponent
            title="The Vendors"
            articleText={theVendors}
            image={"/food.jpeg"}
          />
        ) : (
          <ArticleComponent
            title="The Vendors"
            articleText={theVendors}
            image={"/food.jpeg"}
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
