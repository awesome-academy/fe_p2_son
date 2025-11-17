'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  AiOutlineMail,
  AiOutlineUser,
  AiOutlineLock,
} from 'react-icons/ai';
import InputField from '../../commons/InputField';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import LoginNow from '../common/LoginNow';
import AuthHeader from '../common/AuthHeader';
import AuthButton from '../common/AuthButton';
import { registerSchema } from '@/libs/schemas/registerSchema';

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

type RegisterFormData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function RegisterComponent() {
  const t = useTranslations('Login');
  const tAuth = useTranslations('Auth');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: customZodResolver(registerSchema(tAuth)),
    mode: 'onChange'
  });

  const onSubmit = async (data: RegisterFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: data.username,
          email: data.email,
          password: data.password,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || tAuth('registerFailed'));
      }

      router.push('/login');

    } catch (error: any) {
      console.error('Registration error:', error);
      alert(error.message || tAuth('registrationFailed'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <AuthHeader
        title={tAuth('registerBtn')}
        description={tAuth('createAccountPrompt')}
      />

      <div className="space-y-5">
        <InputField
          id="username"
          label={tAuth('usernameLabel')}
          type="text"
          placeholder={tAuth('usernamePlaceholder')}
          icon={AiOutlineUser}
          register={register}
          name="username"
          error={errors.username}
        />

        <InputField
          id="email"
          label={tAuth('emailLabel')}
          type="email"
          placeholder="example@email.com"
          icon={AiOutlineMail}
          register={register}
          name="email"
          error={errors.email}
        />

        <InputField
          id="password"
          label={tAuth('passwordLabel')}
          type="password"
          placeholder={t("enterPassword")}
          icon={AiOutlineLock}
          register={register}
          name="password"
          error={errors.password}
        />

        <InputField
          id="confirmPassword"
          label={tAuth('confirmPasswordLabel')}
          type="password"
          placeholder={tAuth('confirmPasswordPlaceholder')}
          icon={AiOutlineLock}
          register={register}
          name="confirmPassword"
          error={errors.confirmPassword}
        />

        <AuthButton
          onClick={handleSubmit(onSubmit)}
          isSubmitting={isSubmitting}
          content={tAuth('registerBtn')}
          processingText={t("processing")}
        />
      </div>
      <LoginNow />
    </div>
  );
}
