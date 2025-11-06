'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Logo from '@/components/commons/Logo';
import { normalizedPath } from '@/utils/normalizedPath';
import { sidebarItems } from '@/constants/header';
import NavigationMenu from './NavigationMenu';
import ActionButton from './ActionButton';
import HeroContent from './HeroContent';

export default function Header() {
  const t = useTranslations('Header');
  const items = sidebarItems(t);
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const currentItem =
    items.find((item) => item.path === normalizedPath(pathname)) || items[0];

  const bgImage = { backgroundImage: `url(${currentItem.image})` }

  return (
    <div
      className="relative w-full h-[80vh] flex flex-col justify-between bg-cover bg-center text-white py-[2%] px-[10%]"
      style={bgImage}
    >
      <motion.div
        initial={false}
        animate={{
          position: isSticky ? 'fixed' : 'relative',
          top: isSticky ? 0 : 'auto',
          paddingTop: isSticky ? '0.75rem' : '1.5rem',
          paddingBottom: isSticky ? '0.75rem' : '1.5rem',
          backgroundColor: isSticky ? 'rgba(0, 0, 0, 0.6)' : 'transparent',
        }}
        transition={{
          duration: 0.4,
          ease: [0.4, 0, 0.2, 1]
        }}
        className="flex items-center justify-between px-10 left-0 right-0 z-50"
        style={{
          backdropFilter: isSticky ? 'blur(12px)' : 'none',
        }}
      >
        <Logo color={'white'} />
        <NavigationMenu />
        <ActionButton />
      </motion.div>

      <HeroContent subInfo={currentItem.subInfo} mainInfo={currentItem.mainInfo} />
    </div>
  );
}
