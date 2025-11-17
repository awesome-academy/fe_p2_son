'use client';

import { useTranslations } from "next-intl";

export default function AuthFooter() {
  const t = useTranslations("Login");

  return (
    <p className="text-center text-sm text-gray-600 mt-6">
      {t("byLoggingIn")}
      <a href="#" className="text-blue-600 hover:underline">
        {t("termsOfService")}
      </a>
      {t("and")}
      <a href="#" className="text-blue-600 hover:underline">
        {t("privacyPolicy")}
      </a>
    </p>
  )
}
