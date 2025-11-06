'use client';

import { useTranslations } from 'next-intl';
import CommnetSection from './CommnetSection';

export default function Subfooter() {
  const t = useTranslations('Subfooter');

  return (
    <div
      className="relative w-full py-24 justify-between bg-cover"
      style={{ backgroundImage: "url('images/footer/subfooter.jpg')" }}
    >
      <div className="relative z-10 flex flex-col items-center text-center space-y-8 px-4 border-orange-500 rounded-full">
        <p className="uppercase text-orange-500 font-semibold tracking-wider text-sm">
          {t('promotion')}
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a3d]">
          {t('title')}
        </h2>

        <CommnetSection />
      </div>
    </div>
  );
}
