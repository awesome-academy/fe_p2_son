
import { TranslationValues } from 'next-intl';

export const sidebarItems = (t: (key: keyof TranslationValues) => string) => [
    {
      title: t('home'),
      path: '/',
      image: '/images/header/home-bg.jpg',
      subInfo: t('homeSubInfo'),
      mainInfo: t('homeMainInfo'),
    },
    {
      title: t('about'),
      path: '/about',
      image: '/images/header/about-bg.jpg',
      subInfo: t('aboutSubInfo'),
      mainInfo: t('aboutMainInfo'),
    },
    {
      title: t('services'),
      path: '/services',
      image: '/images/header/services-bg.jpg',
      subInfo: t('servicesSubInfo'),
      mainInfo: t('servicesMainInfo'),
    },
    {
      title: t('packages'),
      path: '/packages',
      image: '/images/header/details-bg.jpg',
      subInfo: t('packagesSubInfo'),
      mainInfo: t('packagesMainInfo'),
    },
  ];
