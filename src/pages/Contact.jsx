import { Box, Heading, Text } from "@chakra-ui/react";

const Contact = () => (
  <Box p={4}>
    <Heading as="h2" size="xl" mb={4}>Contact Us</Heading>
    <Text>Contact information goes here.</Text>
    <Text mt={4}><a href="/">Back to Home</a></Text>
  </Box>
);

export default Contact;