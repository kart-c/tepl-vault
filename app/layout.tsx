import Header from '@/components/header';
import './globals.css';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-open-sans',
});

export const metadata = {
  title: 'Tepl-Vault',
  description: 'Tepl vault includes all the checkweigher documents',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} font-sans min-h-screen`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
