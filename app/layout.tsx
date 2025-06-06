import type { Metadata } from 'next';
import Header from '@/components/Header/Header';

import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
import 'modern-normalize';
import './globals.css';

export const metadata: Metadata = {
  title: 'NoteHub',
  description: 'A simple and efficient app for creating and organizing your notes.',
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>
          <Header />
          {children}
          {modal}
        </TanStackProvider>
      </body>
    </html>
  );
}
