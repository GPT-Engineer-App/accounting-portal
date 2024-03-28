import React from "react";
import { Box, Flex, Spacer, Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box bg="gray.100" py={4}>
      <Flex maxW="container.lg" mx="auto" align="center">
        <Link href="/" fontWeight="bold" fontSize="xl">
          Accounting Firm
        </Link>
        <Spacer />
        <Box>
          <Link href="/" mr={4}>
            Home
          </Link>
          <Link href="/services" mr={4}>
            Services
          </Link>
          <Link href="/contact">Contact</Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
