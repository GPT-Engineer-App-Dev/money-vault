import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <Flex direction={{ base: "column", md: "row" }} justify="space-between">
        <Box flex="3" mr={{ md: 8 }}>
          <Heading as="h2" size="xl" mb={4}>Featured Articles</Heading>
          <Box mb={8}>
            <Heading as="h3" size="lg">Article Title 1</Heading>
            <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
          </Box>
          <Box mb={8}>
            <Heading as="h3" size="lg">Article Title 2</Heading>
            <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
          </Box>
        </Box>
        <Box flex="1">
          <Heading as="h2" size="lg" mb={4}>Trending News</Heading>
          <VStack spacing={4} align="stretch">
            <Box>
              <Heading as="h4" size="md">Trending Title 1</Heading>
              <Text mt={1}>Lorem ipsum dolor sit amet.</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md">Trending Title 2</Heading>
              <Text mt={1}>Lorem ipsum dolor sit amet.</Text>
            </Box>
          </VStack>
          <Heading as="h2" size="lg" mt={8} mb={4}>Latest Updates</Heading>
          <VStack spacing={4} align="stretch">
            <Box>
              <Heading as="h4" size="md">Update Title 1</Heading>
              <Text mt={1}>Lorem ipsum dolor sit amet.</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md">Update Title 2</Heading>
              <Text mt={1}>Lorem ipsum dolor sit amet.</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;