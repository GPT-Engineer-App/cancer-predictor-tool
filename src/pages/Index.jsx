import { Container, Text, VStack, Box, Button, Image, keyframes } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

// Keyframes for animations
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bgGradient="linear(to-r, teal.500, green.500)">
      <VStack spacing={4} animation={`${fadeIn} 2s ease-in-out`}>
        <Box boxSize="sm">
          <Image src="/images/hero-image.png" alt="Hero Image" borderRadius="full" boxShadow="xl" />
        </Box>
        <Text fontSize="4xl" color="white" fontWeight="bold">Welcome to Your Blank Canvas</Text>
        <Text fontSize="lg" color="white">Chat with the agent to start making edits.</Text>
        <Button rightIcon={<FaRocket />} colorScheme="teal" variant="solid" size="lg">
          Get Started
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;