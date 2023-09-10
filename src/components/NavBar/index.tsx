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

export const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

  return (
    <Box
      as="nav"
      bg="#4900CD"
      opacity={0.8}
      p={4}
      color="white"
      position="fixed"
      w="100%"
    >
      <Flex maxW="1200px" mx="auto" alignItems="center" position="relative">
        <Box
          position="absolute"
          top="-10px"
          overflow="hidden"
          width="150px"
          height="150px"
          display={{ base: "none", md: "flex" }}
        >
          <Image src="/7Logo.png" alt="Logo" boxSize="100%" />
        </Box>
        <Box
          position="absolute"
          left="10px"
          top="-10px"
          overflow="hidden"
          width="100px"
          height="100px"
          display={{ base: "flex", md: "none" }}
        >
          <Image src="/7Logo.png" alt="Logo" boxSize="100%" />
        </Box>

        <Spacer />
        <HStack spacing={6} display={{ base: "none", md: "flex" }}>
          <Link fontWeight="semibold">Home</Link>
          <Link fontWeight="semibold">Artists</Link>
          <Link fontWeight="semibold">Vendors</Link>
          <Link fontWeight="semibold">Contact</Link>
          <Link fontWeight="semibold">
            <SlSocialInstagram size={32} color="white" />
          </Link>
        </HStack>
        <Center>
          <IconButton
            ref={btnRef}
            aria-label="Open Menu"
            icon={<GiHamburgerMenu />}
            onClick={onOpen}
            bg="blue.500"
            display={{ base: "flex", md: "none" }}
          />
        </Center>
      </Flex>
      <HamburgerMenu isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
    </Box>
  );
};
