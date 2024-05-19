import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

import { HamburgerMenu } from "@/components/HamburgerMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import { SlSocialInstagram } from "react-icons/sl";
import { NavBarLogo } from "../NavBarLogo";
import { handleClick } from "@/utils/handleClickNewWindow";
export const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

  return (
    <Box
      as="nav"
      bg="#5B19D2"
      p={4}
      color="white"
      position="fixed"
      w="100%"
      zIndex={1000}
    >
      <Flex maxW="1200px" mx="auto" alignItems="center" position="relative">
        <NavBarLogo />
        <Spacer />
        <HStack spacing={6} display={{ base: "none", md: "flex" }}>
          <Link fontWeight="semibold" href="/app/home">
            Home
          </Link>

          <Link fontWeight="semibold" href="/app/artists">
            Artists
          </Link>
          <Link
            fontWeight="semibold"
            onClick={() => handleClick("https://forms.gle/uDghDo37mW7HjBsK8")}
          >
            Vendors Application
          </Link>
          <Link
            fontWeight="semibold"
            onClick={() =>
              handleClick(
                "mailto:sevenhillstattooconvention@gmail.com?subject=Website%20enquiry"
              )
            }
          >
            Contact Us
          </Link>
          <Link
            fontWeight="semibold"
            color="#D2BB34"
            onClick={() =>
              handleClick(
                "https://www.skiddle.com/whats-on/Sheffield/Kelham-Island-Museum/Seven-Hills-Tattoo-Convention-2024-Sheffield/38180081/"
              )
            }
          >
            Buy Tickets
          </Link>
          <Link fontWeight="semibold">
            <SlSocialInstagram
              size={32}
              color="white"
              onClick={() =>
                handleClick(
                  "https://www.instagram.com/sevenhillstattooconvention"
                )
              }
            />
          </Link>
        </HStack>
        <IconButton
          ref={btnRef}
          aria-label="Open Menu"
          color={"white"}
          icon={<GiHamburgerMenu size={32} />}
          onClick={onOpen}
          bg="none"
          display={{ base: "flex", md: "none" }}
          _focus={{ boxShadow: "none" }}
        />
      </Flex>
      <HamburgerMenu isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
    </Box>
  );
};
