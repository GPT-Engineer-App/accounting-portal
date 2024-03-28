import React from "react";
import { Box, Heading, Text, Stack, Flex, Button, Image, Container, SimpleGrid, Icon } from "@chakra-ui/react";
import { FaCalculator, FaChartLine, FaHandshake, FaPhone } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <Flex align="center" direction={{ base: "column", md: "row" }}>
            <Box flex={1} mr={{ md: 8 }}>
              <Heading as="h1" size="2xl" mb={4}>
                Expert Accounting Services
              </Heading>
              <Text fontSize="xl" mb={8}>
                Providing reliable and professional accounting solutions for businesses and individuals.
              </Text>
              <Button colorScheme="blue" size="lg">
                Get Started
              </Button>
            </Box>
            <Box flex={1}>
              <Image src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhY2NvdW50aW5nfGVufDB8fHx8MTcxMTU4ODQ1MXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Accounting" />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Services Section */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={10} textAlign="center">
            Our Services
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box bg="white" p={6} rounded="md" shadow="md" textAlign="center">
              <Icon as={FaCalculator} fontSize="4xl" color="blue.500" mb={4} />
              <Heading as="h3" size="lg" mb={4}>
                Bookkeeping
              </Heading>
              <Text>Accurate and timely bookkeeping services to keep your finances in order.</Text>
            </Box>
            <Box bg="white" p={6} rounded="md" shadow="md" textAlign="center">
              <Icon as={FaChartLine} fontSize="4xl" color="blue.500" mb={4} />
              <Heading as="h3" size="lg" mb={4}>
                Financial Reporting
              </Heading>
              <Text>Comprehensive financial reports to provide insights into your business performance.</Text>
            </Box>
            <Box bg="white" p={6} rounded="md" shadow="md" textAlign="center">
              <Icon as={FaHandshake} fontSize="4xl" color="blue.500" mb={4} />
              <Heading as="h3" size="lg" mb={4}>
                Tax Services
              </Heading>
              <Text>Expert tax planning and preparation services to minimize your tax liabilities.</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <Box textAlign="center" mb={10}>
            <Heading as="h2" size="xl" mb={4}>
              Get in Touch
            </Heading>
            <Text fontSize="xl">Ready to streamline your accounting? Contact us today!</Text>
          </Box>
          <Stack direction={{ base: "column", md: "row" }} spacing={8} justify="center">
            <Button leftIcon={<FaPhone />} colorScheme="blue" size="lg">
              Call Us
            </Button>
            <Button colorScheme="blue" size="lg">
              Send an Email
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
