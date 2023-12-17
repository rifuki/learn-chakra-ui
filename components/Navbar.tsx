// Course#03: Flex Layouts
// Course#10: Toast Component

'use client';

import { UnlockIcon } from '@chakra-ui/icons';
import {
    Flex,
    Heading,
    Box,
    Text,
    Button,
    Spacer,
    HStack,
    useToast,
} from '@chakra-ui/react';

export default function Navbar() {
    const toast = useToast();

    function showToast() {
        toast({
            title: 'Logged out',
            description: 'Successfully logged out',
            duration: 5000,
            isClosable: true,
            status: 'success',
            position: 'top',
            icon: <UnlockIcon />,
        });
    }

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
                <Button
                    onClick={showToast}
                    colorScheme="red"
                >
                    Logout
                </Button>
            </HStack>
        </Flex>
    );
}
