// Course#02: Components & Style Props <- deleted
// Course#04: Grid Layouts
// Course#07: Card Components

'use client';

import useFetchJsonPlace from '@/features/useFetchJsonPlace';
import { EditIcon, ViewIcon } from '@chakra-ui/icons';
import {
    SimpleGrid,
    Box,
    Text,
    Spinner,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Flex,
    Heading,
    HStack,
    Button,
    Divider,
    Avatar,
} from '@chakra-ui/react';

export default function Dashboard() {
    const { data: posts, isLoading } = useFetchJsonPlace();

    if (isLoading)
        return (
            <Flex
                h="70vh"
                alignItems="center"
                justifyContent="center"
                direction="column"
                gap={5}
            >
                <Spinner size="xl" color="purple.400" />
                <Text fontSize="xl" fontWeight="300">
                    Loading...
                </Text>
            </Flex>
        );

    return (
        <SimpleGrid
            spacing={10}
            minChildWidth="300px"
            padding={{ base: '20px', md: '40px' }}
        >
            {posts?.map((post, index) => (
                <Card
                    key={'post-' + post.id}
                    borderRadius={15}
                    borderTop="8px"
                    borderColor="purple.400"
                    bg="white"
                >
                    <CardHeader>
                        <Flex alignItems="center" gap={5}>
                            <Avatar
                                src={`https://picsum.photos/200/300?random=${index}`}
                            />
                            <Box flexGrow={1} w="0px">
                                <Heading
                                    overflow="hidden"
                                    textOverflow="ellipsis"
                                    whiteSpace="nowrap"
                                    as="h3"
                                    size="sm"
                                >
                                    {post.title}
                                </Heading>
                                <Text fontStyle="italic">Author</Text>
                            </Box>
                        </Flex>
                    </CardHeader>

                    <CardBody color="gray.500">
                        <Text align="justify">{post.body}</Text>
                    </CardBody>

                    <Divider borderColor="gray.200" />

                    <CardFooter>
                        <HStack>
                            <Button variant="ghost" leftIcon={<ViewIcon />}>
                                Watch
                            </Button>
                            <Button variant="ghost" leftIcon={<EditIcon />}>
                                Comment
                            </Button>
                        </HStack>
                    </CardFooter>
                </Card>
            ))}
        </SimpleGrid>
    );
}
