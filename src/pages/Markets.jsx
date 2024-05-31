import { Box, Heading, Text } from "@chakra-ui/react";

const Markets = () => (
  <Box p={4}>
    <Heading as="h2" size="xl" mb={4}>Markets News</Heading>
    <Text>Content for Markets News goes here.</Text>
    <Text mt={4}><a href="/">Back to Home</a></Text>
  </Box>
);

export default Markets;