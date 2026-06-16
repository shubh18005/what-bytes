import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/app/globals.css'; // Standard tailwind engine injection

export const metadata: Metadata = {
  title: 'Whatbytes Store Frontend Replica',
  description: 'Pixel perfect assessment platform engine',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-white">
      <body className="bg-white min-h-screen flex flex-col justify-between antialiased selection:bg-[#0052B4] selection:text-white">
        <div>
          {/* Suspense is required here to wrap useSearchParams() components on the client side */}
          <Suspense fallback={<div className="bg-[#0052B4] h-16 animate-pulse w-full" />}>
            <Header />
          </Suspense>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}