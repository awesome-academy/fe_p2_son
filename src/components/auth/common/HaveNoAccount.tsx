'use client';
import { useTranslations } from 'next-intl';

export default function HaveNoAccount() {
  const t = useTranslations('Login');

  return (
    <div className="mt-6 text-center">
      <p className="text-sm text-gray-600">
        {t('noAccount')}
        <a href="/register" className="text-blue-600 hover:text-blue-700 font-semibold">
          {t('registerNow')}
        </a>
      </p>
    </div>
  )
}
