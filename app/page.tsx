import { Heading, Text, Container, Box } from "@chakra-ui/react";

export default function Home() {
    const boxStyles = {
        p: "10px",
        bg: "purple.300",
        color: "white",
        m: "10px",
        textAlign: "center",
        filter:  'blur(2px)',
        ':hover': {
            color: 'black',
            bg: 'blue.200',
            cursor: 'pointer',
            filter: 'none'
        }
    };

    return (
        <Container maxWidth="2xl" py="20px" as="section"> {/* <- override div component as another component like section */}
            <Heading my="30px" p="10px">Chakara UI Components</Heading>
            <Text marginLeft="20px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, laudantium?</Text>
            <Text marginLeft="30px" color="blue.500" fontWeight="bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, laudantium?</Text>

            <Box my="30px" p="50px" bg="orange">
                <Text color="white">This is a box.</Text>
            </Box>

            <Box sx={boxStyles}>
                Hello, ninjas!
            </Box>
        </Container>
    );
}
