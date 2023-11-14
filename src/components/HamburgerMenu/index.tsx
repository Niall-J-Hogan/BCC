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
            <Link color={"white"} href="/app/artists" textAlign={"center"}>
              Artists Application
            </Link>
            <Link color={"white"} href="/app/vendors" textAlign={"center"}>
              Vendors Application
            </Link>
            <Link color={"white"}>Contact</Link>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
