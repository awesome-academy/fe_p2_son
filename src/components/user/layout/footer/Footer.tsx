'use client';

import { useTranslations } from 'next-intl';
import { companyLinks, destinationLinks } from '@/constants/footer';
import NewsLetterForm from './NewsletterForm';
import ListLinks from './ListLinks';
import Media from './Media';
import './Footer.css';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="relative text-gray-700 bg-footer">
      <div className="absolute inset-0 bg-white/90"></div>
      <div className="relative flex z-10 max-w-7xl mx-auto px-[5%] py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-8">
          <Media />
          <ListLinks linkItems={companyLinks(t)} title={t('company')} />
          <ListLinks linkItems={destinationLinks(t)} title={t('destinations')} />
        </div>
        <NewsLetterForm />
      </div>

      <div className="relative z-10 border-t border-gray-200 text-center text-xs py-4 text-gray-500">
        {t('copyright')}
      </div>
    </footer>
  );
}
