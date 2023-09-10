import {
  Box,
  Center,
  Flex,
  HStack,
  IconButton,
  Link,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

import { HamburgerMenu } from "@/components/HamburgerMenu";
import { GiHamburgerMenu } from "react-icons/gi";

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
      <Flex maxW="1200px" mx="auto" alignItems="center">
        <Text fontSize="xl" fontWeight="bold">
          7Hills
        </Text>
        <Spacer />
        <HStack>
          <HStack spacing={6} display={{ base: "none", md: "flex" }}>
            <Link fontWeight={"semibold"}>Home</Link>
            <Link fontWeight={"semibold"}>Artists</Link>
            <Link fontWeight={"semibold"}>Vendors</Link>
            <Link fontWeight={"semibold"}>Contact</Link>
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
        </HStack>
      </Flex>
      <HamburgerMenu isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
    </Box>
  );
};
