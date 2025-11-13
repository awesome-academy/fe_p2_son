'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  AiOutlineMail as Mail,
  AiOutlineLock as Lock,
  AiOutlineGoogle as Google,
} from 'react-icons/ai';
import InputField from '../../commons/InputField';
import { signIn } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import HaveNoAccount from '../common/HaveNoAccount';
import AuthHeader from '../common/AuthHeader';
import AuthButton from '../common/AuthButton';
import Divider from '../common/Divider';
import { loginSchema } from '@/libs/schemas/loginSchema';

const customZodResolver = (schema: z.ZodObject<any, any>) => async (values: any) => {
  try {
    await schema.parseAsync(values);
    return {
      values,
      errors: {},
    };
  } catch (error: any) {
    return {
      values: {},
      errors: error.issues.reduce(
        (acc: Record<string, any>, current: z.ZodIssue) => ({
          ...acc,
          [current.path[0]]: {
            type: current.code,
            message: current.message,
          },
        }),
        {}
      ),
    };
  }
};

type LoginFormData = {
  email: string;
  password: string;
};

export default function LoginForm({ callbackUrl }: { callbackUrl: string }) {
  const t = useTranslations('Login');
  const tAuth = useTranslations('Auth');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setFocus,
  } = useForm<LoginFormData>({
    resolver: customZodResolver(loginSchema(tAuth)),
    mode: 'onChange',
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsSubmitting(true);
    setLoginError(null);

    if (Object.keys(errors).length > 0) {
      const firstErrorField = Object.keys(errors)[0];
      setFocus(firstErrorField as keyof LoginFormData);
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await signIn('credentials', {
        redirect: false,
        email: data.email,
        password: data.password,
        callbackUrl,
      });

      if (result?.error) {
        setLoginError(result.error);
      }

      if (result?.url) {
        router.push(result.url);
        reset();
      }

    } catch (error: any) {
      console.error('Login error:', error);
      setLoginError(error.message || tAuth('loginFailed'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <AuthHeader
        title={t('loginBtn')}
        description={t('loginToContinue')}
      />

      {loginError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">{tAuth('error')}</strong>
          <span className="block sm:inline"> {loginError}</span>
        </div>
      )}

      <div className="space-y-5">
        <InputField
          id="email"
          label={tAuth('emailLabel')}
          type="email"
          placeholder="example@email.com"
          icon={Mail}
          register={register}
          name="email"
          error={errors.email}
        />

        <InputField
          id="password"
          label={tAuth('passwordLabel')}
          type="password"
          placeholder={t('enterPassword')}
          icon={Lock}
          register={register}
          name="password"
          error={errors.password}
        />

        <AuthButton
          onClick={handleSubmit(onSubmit)}
          isSubmitting={isSubmitting}
          content={t('loginBtn')}
          processingText={t('processing')}
        />
      </div>

      <Divider />

      <button
        type="button"
        onClick={() => signIn("google", { callbackUrl })}
        className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
      >
        <Google className="text-xl" />
        {t('loginWithGoogle')}
      </button>

      <HaveNoAccount />
    </div>
  );
}
