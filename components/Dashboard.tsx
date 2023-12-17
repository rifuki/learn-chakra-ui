// Course#02: Components & Style Props <- deleted
// Course#04: Grid Layouts

import { SimpleGrid, Box, Text } from '@chakra-ui/react';

export default function Dashboard() {
    return (
        <SimpleGrid columns={4} spacing={10} minChildWidth="200px" p="20px">
            <Box bg="white" height="200px" border="1px solid">
                <Text color={{ base: 'pink', md: 'blue', lg: 'green', xl: 'red' }}>
                    Hello
                </Text>
            </Box>
            <Box bg="white" height="200px" border="1px solid" />
            <Box bg="white" height="200px" border="1px solid" />
            <Box bg="white" height="200px" border="1px solid" />

            <Box bg="white" height="200px" border="1px solid" />
            <Box bg="white" height="200px" border="1px solid" />
            <Box bg="white" height="200px" border="1px solid" />
            <Box bg="white" height="200px" border="1px solid" />

            <Box bg="white" height="200px" border="1px solid" />
            <Box bg="white" height="200px" border="1px solid" />
            <Box bg="white" height="200px" border="1px solid" />
            <Box bg="white" height="200px" border="1px solid" />
        </SimpleGrid>
    );
}
