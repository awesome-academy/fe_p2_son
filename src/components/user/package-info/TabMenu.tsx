'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { FaInfoCircle, FaCalendarAlt, FaMapMarkerAlt, FaImage } from 'react-icons/fa';

export default function TabMenu({ onChange }: { onChange: (index: number) => void }) {
  const t = useTranslations('TabMenu');
  const [active, setActive] = useState(0);

  const tabs = [
    { name: t('information'), icon: FaInfoCircle },
    { name: t('tourPlan'), icon: FaCalendarAlt },
    { name: t('location'), icon: FaMapMarkerAlt },
    { name: t('gallery'), icon: FaImage },
  ];

  const handleClick = (index: number) => {
    setActive(index);
    onChange(index);
  };

  return (
    <div className="flex w-full">
      {tabs.map((tab, i) => (
        <button
          key={tab.name}
          onClick={() => handleClick(i)}
          className={`flex flex-1 items-center justify-center px-6 py-8 transition-all duration-200 cursor-pointer
          ${active === i
              ? "bg-white"
              : "bg-[#F8F8F8] hover:text-black"
            }
        `}
        >
          <tab.icon className="text-lg mr-2" />
          <span className="text-sm font-medium">{tab.name}</span>
        </button>
      ))}
    </div>);
}
