import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import '../../globals.css';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import Providers from '@/components/auth/Provider';
import AuthFooter from '@/components/auth/common/AuthFooter';

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
          <Providers>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
              <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  {children}
                </div>
                <AuthFooter />
              </div>
            </div>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
