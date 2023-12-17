
import Navbar from '@/components/Navbar';
import Dashboard from '@/components/Dashboard';
import { Grid, GridItem } from '@chakra-ui/react';

export default function Home() {
    return (
        <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
            <GridItem
                as="aside"
                colSpan={{ base: 6, lg: 2, xl: 1 }}
                bg="purple.400"
                minHeight={{ lg: '100vh' }}
                p={{ base: '20px', lg: '30px' }}
            >
                <span>Sidebar</span>
            </GridItem>
            <GridItem
                as="main"
                colSpan={{ base: 6, lg: 4, xl: 5 }}
                padding="40px"
            >
                <Navbar />
                <Dashboard />
            </GridItem>
        </Grid>
    );
}
