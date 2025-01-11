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
      placement="bottom"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent
        backgroundColor={"transparent"}
        opacity={1}
        marginLeft={"auto"}
        py="10px"
      >
        <HStack height="50px">
          <DrawerCloseButton color="white" border={"white solid 2px"} />
        </HStack>
        <DrawerBody>
          <VStack spacing={6} p="0px" align="flex-end" w="full">
            <Link
              color={"white"}
              href="/app/home"
              backgroundColor={"#5B19D2"}
              p="10px"
              border="solid white 2px"
              borderRadius={10}
              w="full"
              textAlign={"center"}
            >
              Home
            </Link>
            <Link
              color={"white"}
              href="/app/artists"
              // onClick={() => handleClick("https://forms.gle/fi4GdsigSCcKn23S9")}
              backgroundColor={"#5B19D2"}
              p="10px"
              border="solid white 2px"
              borderRadius={10}
              w="full"
              textAlign={"center"}
            >
              Artists
            </Link>
            <Link
              color={"white"}
              backgroundColor={"#5B19D2"}
              p="10px"
              border="solid white 2px"
              borderRadius={10}
              w="full"
              textAlign={"center"}
              // onClick={() => handleClick("https://forms.gle/uDghDo37mW7HjBsK8")}
            >
              Vendors Application (Coming Soon)
            </Link>
            <Link
              color={"white"}
              backgroundColor={"#5B19D2"}
              p="10px"
              border="solid white 2px"
              borderRadius={10}
              onClick={() =>
                handleClick(
                  "mailto:sevenhillstattooconvention@gmail.com?subject=Website%20enquiry"
                )
              }
              w="full"
              textAlign={"center"}
            >
              Contact
            </Link>
            <Link
              color={"#D2BB34"}
              backgroundColor={"#5B19D2"}
              p="10px"
              border="solid white 2px"
              borderRadius={10}
              // onClick={() =>
              //   handleClick(
              //     "https://www.skiddle.com/whats-on/Sheffield/Kelham-Island-Museum/Seven-Hills-Tattoo-Convention-2024-Sheffield/38180081/"
              //   )
              // }
              w="full"
              textAlign={"center"}
            >
              Buy Tickets (Coming Soon)
            </Link>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
