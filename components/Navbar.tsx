// Course#03: Flex Layouts

import {
    Flex,
    Heading,
    Box,
    Text,
    Button,
    Spacer,
    HStack,
} from '@chakra-ui/react';

export default function Navbar() {
    return (
        <Flex
            as="nav"
            mt="20px"
            padding={{ base: '20px', md: '40px' }}
            alignItems="center"
            h="50px"
            position="sticky"
            top={0}
            zIndex={1}
            backdropFilter="blur(1px)"
        >
            <Heading
                as="h1"
                fontSize={{ base: '2xl', lg: '3xl' }}
            >
                Chakra UI
            </Heading>

            <Spacer />

            <HStack spacing={{ base: '8px', md: '15px', lg: '15px' }}>
                <Box
                    bg="purple.400"
                    borderRadius="50%"
                    textAlign="center"
                    display={{ base: 'none', md: 'flex' }}
                    w="50px"
                    h="50px"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Text
                        fontSize="md"
                        fontWeight="bold"
                        color="white"
                    >
                        R
                    </Text>
                </Box>
                <Text>rifuki@nyan.moe</Text>
                <Button colorScheme="red">Logout</Button>
            </HStack>
        </Flex>
    );
}
