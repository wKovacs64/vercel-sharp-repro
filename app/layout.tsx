import * as React from 'react';
import { Source_Sans_3 } from 'next/font/google';
import './styles/app.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
