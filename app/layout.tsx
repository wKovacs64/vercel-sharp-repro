import * as React from 'react';
import { Source_Sans_3 } from 'next/font/google';
import './styles/app.css';

const sourceSans3 = Source_Sans_3({
  weight: ['300', '400'],
  subsets: ['latin'],
  variable: '--font-source-sans-3',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-zinc-100 text-[#111111] ${sourceSans3.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
