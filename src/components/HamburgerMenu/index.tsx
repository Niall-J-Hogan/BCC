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
      <DrawerOverlay backgroundBlendMode={"color-dodge"} />
      <DrawerContent
        backgroundColor={"#5B19D2"}
        //backgroundColor={"#979BFF"}
        opacity={1}
        // borderRadius={"10px"}
        marginLeft={"auto"}
        py="10px"
      >
        <HStack height="50px">
          <DrawerCloseButton color="white" />
        </HStack>
        <DrawerBody>
          <VStack spacing={6} p="0px" align="flex-end" w="full">
            <Link
              color={"white"}
              href="/app/homepage"
              backgroundColor={"#979BFF"}
              p="10px"
              border="solid white 2px"
              borderRadius={10}
            >
              Home
            </Link>
            <Link
              color={"white"}
              onClick={() => handleClick("https://forms.gle/nTc8Rg9tX61D5KwP9")}
              backgroundColor={"#979BFF"}
              p="10px"
              border="solid white 2px"
              borderRadius={10}
            >
              Artists Application
            </Link>
            <Link
              color={"white"}
              backgroundColor={"#979BFF"}
              p="10px"
              border="solid white 2px"
              borderRadius={10}
              // onClick={() => handleClick("https://forms.gle/uDghDo37mW7HjBsK8")}
            >
              Vendors Application Coming Soon!
            </Link>
            <Link
              color={"white"}
              backgroundColor={"#979BFF"}
              p="10px"
              border="solid white 2px"
              borderRadius={10}
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
