// Course#03: Flex Layouts
// Course#10: Toast Component

'use client';

import { UnlockIcon } from '@chakra-ui/icons';
import {
    Flex,
    Heading,
    Text,
    Button,
    Spacer,
    HStack,
    useToast,
    Avatar,
    AvatarBadge,
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
            <Heading as="h1" fontSize={{ base: '2xl', lg: '3xl' }}>
                Chakra UI
            </Heading>

            <Spacer />

            <HStack spacing={{ base: '8px', md: '15px', lg: '15px' }}>
                <Avatar src={process.env.NEXT_PUBLIC_AVATAR_URL}>
                    <AvatarBadge width="1.3em" bg="teal.400">
                        <Text fontSize="xs" color="white">
                            3
                        </Text>
                    </AvatarBadge>
                </Avatar>
                {/* <Avatar src="null" name="rifuki" bg="purple.400">
                    <AvatarBadge width="1.3em" bg="teal.400">
                        <Text fontSize="xs" color="white">3</Text>
                    </AvatarBadge>
                </Avatar> */}
                <Text>rifuki@nyan.moe</Text>
                <Button onClick={showToast} colorScheme="red">
                    Logout
                </Button>
            </HStack>
        </Flex>
    );
}
