'use client';

import { useTranslations } from 'next-intl';

export default function LoginNow() {
  const t = useTranslations('Auth');

  return (

    <div className="mt-6 text-center">
      <p className="text-sm text-gray-600">
        {t("alreadyHaveAccount")}
        <a href="/login" className="text-blue-600 hover:text-blue-700 font-semibold">
          {t("loginNow")}
        </a>
      </p>
    </div>
  )
}
