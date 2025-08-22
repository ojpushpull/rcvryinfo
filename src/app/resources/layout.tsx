import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin']});

export const metadata: Metadata = {
    title: 'My Next.js App',
    description: 'Built with Next.js and Typscript',
};

interface RootLayoutProps{
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body className={inter.className}>
                
            </body>
        </html>
    )
}
