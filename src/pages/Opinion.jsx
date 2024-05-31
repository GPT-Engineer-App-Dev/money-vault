import { Box, Heading, Text } from "@chakra-ui/react";

const Opinion = () => (
  <Box p={4}>
    <Heading as="h2" size="xl" mb={4}>Opinion</Heading>
    <Text>Content for Opinion goes here.</Text>
    <Text mt={4}><a href="/">Back to Home</a></Text>
  </Box>
);

export default Opinion;