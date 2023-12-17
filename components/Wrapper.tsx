import { ReactNode } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import Sidebar from '@/components/Sidebar';
import Navbar from './Navbar';

export default function Wrapper({ children }: { children: ReactNode }) {
    return (
        <Grid templateColumns="repeat(6, 1fr)" bg="gray.50" height="100vh">
            <GridItem
                as="aside"
                colSpan={{ base: 6, lg: 1 }}
                bg="brand.600"
                minHeight={{ lg: '100vh' }}
                p={{ base: '20px', lg: '30px' }}
            >
                <Sidebar />
            </GridItem>
            <GridItem as="main" colSpan={{ base: 6, lg: 5 }} overflowY="auto">
                <Navbar />
                {children}
            </GridItem>
        </Grid>
    );
}
