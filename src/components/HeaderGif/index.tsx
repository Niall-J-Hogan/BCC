import { UseGetSizeForDevices } from "@/hooks/useGetSizesForDevice";
import { handleClick } from "@/utils/handleClickNewWindow";
import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";

interface IHeaderGif {
  title?: string;
  subtitle?: string;
  tagline?: any;
  isButton?: boolean;
}
export const HeaderGif = ({
  title,
  subtitle,
  tagline,
  isButton = false,
}: IHeaderGif) => {
  const { headerGif } = UseGetSizeForDevices();

  return (
    <VStack
      marginTop={headerGif.gifMargin}
      height="full"
      paddingTop={headerGif.gifPadding}
    >
      <Box
        backgroundImage={`/Video.gif`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        width="100vw"
        h={headerGif.gifSize}
      >
        <VStack
          spacing={10}
          height="full"
          justifyContent={"center"}
          margin={"auto"}
        >
          {title && (
            <Heading
              as="h2"
              size={headerGif.textSize}
              color="#FEFAE0"
              backgroundColor={"#4900CD"}
              padding={"5px"}
              fontStyle={"italic"}
            >
              {title}
            </Heading>
          )}
          {tagline && (
            <Heading
              as="h4"
              size={headerGif.textSize}
              color="#CDAF00"
              zIndex={99}
              flexWrap={"nowrap"}
              padding={"5px"}
              backgroundColor={"#4900CD"}
            >
              {tagline}
            </Heading>
          )}
          {subtitle && (
            <Text
              fontSize={headerGif.textSize}
              padding={"5px"}
              color="white"
              backgroundColor={"#4900CD"}
              textAlign={"center"}
            >
              {subtitle}
            </Text>
          )}
          {isButton && (
            <Button
              color={"white"}
              backgroundColor={"#CDAF00"}
              size={"lg"}
              width={headerGif.gifButtonSize}
              onClick={() => handleClick("https://forms.gle/uDghDo37mW7HjBsK8")}
            >
              Vendor Application
            </Button>
          )}
        </VStack>
      </Box>
    </VStack>
  );
};
