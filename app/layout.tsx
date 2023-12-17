import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ChakraUiProvider from '@/components/providers/ChakraUiProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Responsive Styles',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ChakraUiProvider>
                    {children}
                </ChakraUiProvider>
            </body>
        </html>
    );
}
