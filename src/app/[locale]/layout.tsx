import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import '../globals.css';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import Header from '@/components/user/layout/header/Header';
import Subfooter from '@/components/user/layout/subfooter/Subfooter';
import Footer from '@/components/user/layout/footer/Footer';

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
            <Header />
            {children}
            <Subfooter />
            <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
