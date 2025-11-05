import { TranslationValues } from 'next-intl';

export const companyLinks = (t: (key: keyof TranslationValues) => string) => [
  { title: t('aboutUs'), path: '/about' },
  { title: t('careers'), path: '/careers' },
  { title: t('blog'), path: '/blog' },
  { title: t('pricing'), path: '/pricing' },
];

export const destinationLinks = (t: (key: keyof TranslationValues) => string) => [
  { title: t('maldives'), path: '/destinations/maldives' },
  { title: t('losAngeles'), path: '/destinations/los-angeles' },
  { title: t('lasVegas'), path: '/destinations/las-vegas' },
  { title: t('toronto'), path: '/destinations/toronto' },
];
