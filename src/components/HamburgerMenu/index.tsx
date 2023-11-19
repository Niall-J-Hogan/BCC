import { handleClick } from "@/utils/handleClickNewWindow";
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
        width="80%"
        marginLeft={"auto"}
        py="10px"
      >
        <HStack height="50px">
          <DrawerCloseButton />
        </HStack>
        <DrawerBody>
          <VStack spacing={6} p="0px" align="flex-end">
            <Link color={"white"} href="/app/homepage">
              Home
            </Link>
            <Link
              color={"white"}
              onClick={() => handleClick("https://forms.gle/nTc8Rg9tX61D5KwP9")}
            >
              Artists Application
            </Link>
            <Link
              color={"white"}
              // onClick={() => handleClick("https://forms.gle/uDghDo37mW7HjBsK8")}
            >
              Vendors Application Coming Soon!
            </Link>
            <Link
              color={"white"}
              onClick={() =>
                handleClick(
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
