import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

import { ClerkProvider } from '@clerk/nextjs';
import React from 'react';

import { ModalProvider } from '@/components/ModalProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Genius',
  description: 'AI Platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={inter.className}>
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
