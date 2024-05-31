import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={4} mt={8}>
      <Flex justifyContent="center" alignItems="center">
        <NavLink to="/about" style={{ margin: '0 10px' }}>About</NavLink>
        <NavLink to="/contact" style={{ margin: '0 10px' }}>Contact</NavLink>
        <NavLink to="/privacy-policy" style={{ margin: '0 10px' }}>Privacy Policy</NavLink>
      </Flex>
      <Text textAlign="center" mt={4}>© 2023 Financial Times</Text>
    </Box>
  );
};

export default Footer;