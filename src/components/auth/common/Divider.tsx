'use client';
import { useTranslations } from 'next-intl';

export default function Divider() {
  const t = useTranslations('Login');

  return (
    <div className="relative flex items-center justify-center my-6">
      <span className="absolute bg-white px-3 text-sm text-gray-500">
        {t('or')}
      </span>
      <div className="w-full border-t border-gray-300"></div>
    </div>
  )
}
