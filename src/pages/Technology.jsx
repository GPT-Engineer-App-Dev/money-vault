import { Box, Heading, Text } from "@chakra-ui/react";

const Technology = () => (
  <Box p={4}>
    <Heading as="h2" size="xl" mb={4}>Technology News</Heading>
    <Text>Content for Technology News goes here.</Text>
    <Text mt={4}><a href="/">Back to Home</a></Text>
  </Box>
);

export default Technology;