import { Heading, Image, Text, VStack } from "@chakra-ui/react";

interface IMobileArticleComponent {
  title: string;
  articleText: string;
  image: string;
  orientation?: string;
}
export const MobileArticleComponent = ({
  title,
  articleText,
  image,
  orientation = "flex-start",
}: IMobileArticleComponent) => {
  return (
    <VStack>
      <Heading
        as="h1"
        size={"xl"}
        color="black  "
        padding={"5px"}
        fontStyle={"italic"}
        alignSelf={orientation}
        borderBottom={"solid 2px black"}
      >
        {title}
      </Heading>
      <VStack marginTop="30px" height="full">
        {orientation === "flex-start" && (
          <Image alt="" src={image} sizes="300px" />
        )}
        <VStack height="full">
          <Text
            as="article"
            lineHeight={"9"}
            fontWeight={"semibold"}
            whiteSpace="pre-line"
            py="10px"
            textAlign={"center"}
            dangerouslySetInnerHTML={{ __html: articleText }}
          ></Text>
        </VStack>

        {orientation === "flex-end" && (
          <Image alt="" src={image} sizes="300px" />
        )}
      </VStack>
    </VStack>
  );
};
