import {
  Box,
  Center,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

import { HamburgerMenu } from "@/components/HamburgerMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import { SlSocialInstagram } from "react-icons/sl";
import { NavBarLogo } from "../NavBarLogo";
import { useRouter } from "next/router";
export const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const btnRef = React.useRef(null);

  const naviageToURL = () => {};

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
          <Link fontWeight="semibold" href="/app/homepage">
            Home
          </Link>
          <Link fontWeight="semibold" href="/app/artists">
            Artists
          </Link>
          <Link fontWeight="semibold" href="/app/vendors">
            Vendors
          </Link>
          <Link fontWeight="semibold">Contact</Link>
          <Link fontWeight="semibold">
            <SlSocialInstagram
              size={32}
              color="white"
              onClick={() =>
                router.push(
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
          icon={<GiHamburgerMenu />}
          onClick={onOpen}
          bg="#979BFF"
          display={{ base: "flex", md: "none" }}
        />
      </Flex>
      <HamburgerMenu isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
    </Box>
  );
};
