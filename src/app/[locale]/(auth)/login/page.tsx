'use client';

import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import LoginForm from '../../../../components/auth/login/LoginForm';

export default function LoginPage() {
  const t = useTranslations("Login");
  const params = useSearchParams();
  const callbackUrl = params.get('callbackUrl') || '/';

  return (
    <LoginForm callbackUrl={callbackUrl} />
  );
}
