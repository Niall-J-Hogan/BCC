import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
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
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Menu</DrawerHeader>
        <DrawerBody>
          <VStack spacing={6} width="auto">
            <Link>Home</Link>
            <Link>Artists</Link>
            <Link>Vendors</Link>
            <Link>Contact</Link>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
