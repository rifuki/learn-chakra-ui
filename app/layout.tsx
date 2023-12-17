import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ChakraUiProvider from '@/components/providers/ChakraUiProvider';
import Wrapper from '@/components/Wrapper';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Lists & List Icons',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ChakraUiProvider>
                    <Wrapper>{children}</Wrapper>
                </ChakraUiProvider>
            </body>
        </html>
    );
}
