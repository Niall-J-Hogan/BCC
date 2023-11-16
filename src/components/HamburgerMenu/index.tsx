import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Link,
  VStack,
} from "@chakra-ui/react";

interface IHamburgerMenu {
  isOpen: boolean;
  onClose: () => void;
  btnRef: React.MutableRefObject<null>;
}
export const HamburgerMenu = ({ isOpen, onClose, btnRef }: IHamburgerMenu) => {
  const handleClick = (websiteLink: string) => {
    if (websiteLink) {
      window.open(
        websiteLink,
        "_blank" // <- This is what makes it open in a new window.
      );
    }
  };
  return (
    <Drawer
      isOpen={isOpen}
      placement="top"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent
        backgroundColor={"#979BFF"}
        borderRadius={"10px"}
        width="120px"
        marginLeft={"auto"}
        py="10px"
      >
        <HStack height="50px">
          <DrawerCloseButton />
        </HStack>
        <DrawerBody margin={"auto"}>
          <VStack spacing={5} width="auto" p="0px" margin={"auto"}>
            <Link color={"white"} href="/app/homepage">
              Home
            </Link>
            <Link
              color={"white"}
              onClick={() => handleClick("https://forms.gle/nTc8Rg9tX61D5KwP9")}
              textAlign={"center"}
            >
              Artists Application
            </Link>
            <Link
              color={"white"}
              // onClick={() => handleClick("https://forms.gle/uDghDo37mW7HjBsK8")}
              textAlign={"center"}
            >
              Vendors Application Coming Soon!
            </Link>
            <Link
              color={"white"}
              onClick={() =>
                window.open(
                  "mailto:sevenhillstattooconvention@gmail.com?subject=Website%20enquiry"
                )
              }
            >
              Contact
            </Link>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
