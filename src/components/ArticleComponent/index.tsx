import { Box, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";

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
  const textPadding = textOrientation === "flex-end" ? "50px" : "";
  const textPadding2 = textOrientation === "flex-start" ? "50px" : "";
  return (
    <HStack height="full">
      {imageOrientation === "flex-start" && (
        <Image alt="" src={image} max-width={"40%"} width={"40%"} />
      )}
      <VStack height="full" spacing={16} width="80%">
        <Heading
          as="h1"
          size={"xl"}
          color="black"
          padding={"5px"}
          fontStyle={"italic"}
          alignSelf={textOrientation}
          borderBottom={"solid 2px black"}
        >
          {title}
        </Heading>

        <Text
          as="article"
          paddingLeft={textPadding}
          paddingRight={textPadding2}
          lineHeight={"9"}
          fontWeight={"semibold"}
          whiteSpace="pre-line"
          dangerouslySetInnerHTML={{ __html: articleText }}
        ></Text>
      </VStack>

      {imageOrientation === "flex-end" && (
        <Image alt="" src={image} max-width={"40%"} width={"40%"} />
      )}
    </HStack>
  );
};
