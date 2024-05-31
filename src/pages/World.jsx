import { Box, Heading, Text } from "@chakra-ui/react";

const World = () => (
  <Box p={4}>
    <Heading as="h2" size="xl" mb={4}>World News</Heading>
    <Text>Content for World News goes here.</Text>
    <Text mt={4}><a href="/">Back to Home</a></Text>
  </Box>
);

export default World;