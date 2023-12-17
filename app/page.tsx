
import Navbar from '@/components/Navbar';
import Dashboard from '@/components/Dashboard';
import { Grid, GridItem } from '@chakra-ui/react';

export default function Home() {
    return (
        <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
            <GridItem
                as="aside"
                colSpan={1}
                bg="purple.400"
                minHeight="100vh"
                p="30px"
            >
                <span>Sidebar</span>
            </GridItem>
            <GridItem
                as="main"
                colSpan={5}
                padding="30px"
            >
                <Navbar />
                <Dashboard />
            </GridItem>
        </Grid>
    );
}
