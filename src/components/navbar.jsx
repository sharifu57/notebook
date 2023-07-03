import { Box, Button,Link, Flex, Spacer, Heading, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React from 'react';

export default function Navbar() {
  return (
    <Box bg="gray.100" p={4}>
      <Flex alignItems="center" justifyContent="space-between">
        <Box>
          {/* Your logo component */}
          <span>Logo</span>
        </Box>
        <Flex>
          <Link mr={4}>Home</Link>
          <Link mr={4}>About</Link>
          <Link mr={4}>Services</Link>
          <Link mr={4}>Contact</Link>
        </Flex>
      </Flex>
    </Box>
  );
}
