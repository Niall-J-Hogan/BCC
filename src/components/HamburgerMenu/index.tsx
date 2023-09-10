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
        py="30px"
      >
        <HStack height="50px">
          <DrawerCloseButton />
        </HStack>
        <DrawerBody margin={"auto"}>
          <VStack spacing={6} width="auto" p="0px" margin={"auto"}>
            <Link color={"white"}>Home</Link>
            <Link color={"white"}>Artists</Link>
            <Link color={"white"}>Vendors</Link>
            <Link color={"white"}>Contact</Link>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
