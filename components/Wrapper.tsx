import { ReactNode } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import Sidebar from '@/components/Sidebar';
import Navbar from './Navbar';

export default function Wrapper({ children }: { children: ReactNode }) {
    return (
        <Grid templateColumns="repeat(6, 1fr)" bg="gray.200">
            <GridItem
                as="aside"
                colSpan={{ base: 6, lg: 2, xl: 1 }}
                bg="purple.400"
                minHeight={{ lg: '100vh' }}
                p={{ base: '20px', lg: '30px' }}
            >
                <Sidebar />
            </GridItem>
            <GridItem as="main" colSpan={{ base: 6, lg: 4, xl: 5 }} padding="20px">
                <Navbar />
                {children}
            </GridItem>
        </Grid>
    );
}
