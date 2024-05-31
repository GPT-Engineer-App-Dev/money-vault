import { Box, Heading, Text } from "@chakra-ui/react";

const PrivacyPolicy = () => (
  <Box p={4}>
    <Heading as="h2" size="xl" mb={4}>Privacy Policy</Heading>
    <Text>Privacy policy information goes here.</Text>
    <Text mt={4}><a href="/">Back to Home</a></Text>
  </Box>
);

export default PrivacyPolicy;