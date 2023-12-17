import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ChakraUiProvider from '@/components/providers/ChakraUiProvider';
import Wrapper from '@/components/Wrapper';
import { ReactNode } from 'react';
import TanStackProvider from '@/components/providers/TanStackProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Tabs Component',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ChakraUiProvider>
                    <TanStackProvider>
                        <Wrapper>{children}</Wrapper>
                    </TanStackProvider>
                </ChakraUiProvider>
            </body>
        </html>
    );
}
