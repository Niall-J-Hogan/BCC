import { HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";

interface IArticleComponent {
  title: string;
  articleText: string;
  image: string;
  imageOrientation?: string;
  textOrientation?: string;
}

export const ArticleComponent = ({
  image,
  articleText,
  title,
  imageOrientation = "flex-start",
  textOrientation = "flex-start",
}: IArticleComponent) => {
  return (
    <VStack>
      <Heading
        as="h1"
        size={"2xl"}
        color="black  "
        padding={"5px"}
        fontStyle={"italic"}
        alignSelf={textOrientation}
        borderBottom={"solid 2px black"}
      >
        {title}
      </Heading>
      <HStack marginTop="20px" height="full">
        {imageOrientation === "flex-start" && (
          <Image alt="" src={image} max-width={"100%"} width={"auto"} />
        )}
        <VStack height="full">
          <Text
            as="article"
            paddingX="40px"
            lineHeight={"9"}
            fontWeight={"semibold"}
            whiteSpace="pre-line"
          >
            {articleText}
          </Text>
        </VStack>

        {imageOrientation === "flex-end" && (
          <Image alt="" src={image} max-width={"100%"} width={"auto"} />
        )}
      </HStack>
    </VStack>
  );
};
