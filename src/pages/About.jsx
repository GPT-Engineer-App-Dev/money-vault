import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => (
  <Box p={4}>
    <Heading as="h2" size="xl" mb={4}>About Us</Heading>
    <Text>Information about the Financial Times goes here.</Text>
    <Text mt={4}><a href="/">Back to Home</a></Text>
  </Box>
);

export default About;