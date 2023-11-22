import { UseGetSizeForDevices } from "@/hooks/useGetSizesForDevice";
import { handleClick } from "@/utils/handleClickNewWindow";
import { Image, Text, VStack } from "@chakra-ui/react";

interface ISponsorLogoBox {
  title: string;
  subtitle: string;
  imageLink: string;
  websiteLink: string;
  altText: string;
}

export const SponsorLogoBox = ({
  title,
  subtitle,
  imageLink,
  websiteLink,
  altText,
}: ISponsorLogoBox) => {
  const { sponsorLogoBox } = UseGetSizeForDevices();
  return (
    <VStack width={"50vw"} height="full">
      <Image
        src={imageLink}
        alt={altText}
        height={sponsorLogoBox.imageSize}
        py="5px"
        onClick={() => handleClick(websiteLink)}
        cursor={"pointer"}
      />
      <Text
        fontSize={sponsorLogoBox.sponsorTitleSize}
        display={sponsorLogoBox.hideText}
      >
        {title}
      </Text>
      <Text
        fontSize={sponsorLogoBox.sponsorSubTitleSize}
        fontStyle={"italic"}
        display={sponsorLogoBox.hideText}
        textAlign={"center"}
        width="full"
      >
        {subtitle}
      </Text>
    </VStack>
  );
};
