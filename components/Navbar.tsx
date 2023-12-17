// Course#03: Flex Layouts

import { Flex, Heading, Box, Text, Button, Spacer, HStack } from '@chakra-ui/react';

export default function Navbar() {
    return(
        <Flex as="nav" p="10px" alignItems="center">
            <Heading as="h1">Chakra-Ui</Heading>
            <Spacer />

            <HStack spacing="20px">
                <Box bg="gray.200" p="10px">R</Box>
                <Text>rifuki@nyanyan.com</Text>
                <Button colorScheme='blue'>Logout</Button>
            </HStack>
        </Flex>

    // <Flex bg="gray.200" justify="space-around" wrap="wrap-reverse" gap="3">
    //     <Box width="150px" height="50px" bg="red">1</Box>
    //     <Box width="150px" height="50px" flexGrow="2" bg="blue">2</Box>
    //     <Box width="150px" height="50px" flexGrow="1" bg="green">3</Box>
    //     <Box width="150px" height="50px" flexGrow="1" bg="yellow">4</Box>
    // </Flex>
    );
}