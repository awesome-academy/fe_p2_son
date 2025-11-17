import { z } from 'zod';

export const registerSchema = (t: any) => z.object({
  username: z.string()
    .min(3, t('usernameMinLength'))
    .max(20, t('usernameMaxLength'))
    .regex(/^[a-zA-Z0-9_]+$/, t('usernameInvalidChars')),
  email: z.string()
    .email(t('emailInvalid'))
    .min(1, t('emailRequired')),
  password: z.string()
    .min(8, t('passwordMinLength'))
    .regex(/[A-Z]/, t('passwordUppercase'))
    .regex(/[a-z]/, t('passwordLowercase'))
    .regex(/[0-9]/, t('passwordNumber')),
  confirmPassword: z.string()
    .min(1, t('confirmPasswordRequired'))
}).refine((data) => data.password === data.confirmPassword, {
  message: t('passwordsDoNotMatch'),
  path: ['confirmPassword']
});
