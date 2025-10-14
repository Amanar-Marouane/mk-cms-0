'use client';
import { Toaster } from '@/components/ui/sonner';
import { ToastProvider } from '@/components/ui/toast';
import AppProvider from '@/contexts/AppProvider';
import { fontVariables } from '@/lib/font';
import { cn } from '@/lib/utils';
import "@/styles/editor-styles.css";
import NextTopLoader from 'nextjs-toploader';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { Inter } from 'next/font/google';
import 'aos/dist/aos.css'; // Import AOS styles globally
import './globals.css';
import './theme.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>MonkeysCMS - AI-Powered Content Management System</title>
        <meta name="description" content="The next-gen CMS that generates and optimizes websites in seconds with full SEO and performance automation." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={cn(
          'bg-background overscroll-none font-sans antialiased',
          'theme-default',
          'theme-scaled',
          fontVariables,
          inter.className
        )}
      >
        <ToastProvider>
          <AppProvider>
            <NextTopLoader showSpinner={false} />
            <NuqsAdapter>
              <Toaster />
              {children}
            </NuqsAdapter>
          </AppProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
