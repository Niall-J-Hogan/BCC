import { HStack, VStack, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

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
          <Image alt="" src={image} sizes="300px" />
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
          <Image alt="" src={image} sizes="300px" />
        )}
      </HStack>
    </VStack>
  );
};
