import { HStack, VStack, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

interface IArticleComponent {
  title: string;
  articleText: string;
  image: string;
  orientation?: string;
}

export const ArticleComponent = ({
  image,
  articleText,
  title,
  orientation = "flex-start",
}: IArticleComponent) => {
  return (
    <VStack>
      <Heading
        as="h1"
        size={"2xl"}
        color="black  "
        padding={"5px"}
        fontStyle={"italic"}
        alignSelf={orientation}
      >
        {title}
      </Heading>
      <HStack marginTop="50px">
        {orientation === "flex-start" && (
          <Image alt="" src={image} sizes="300px" />
        )}

        <Text as="article" paddingX="40px" lineHeight={"9"}>
          {articleText}
        </Text>
        {orientation === "flex-end" && (
          <Image alt="" src={image} sizes="300px" />
        )}
      </HStack>
    </VStack>
  );
};
