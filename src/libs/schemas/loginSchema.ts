import { z } from 'zod';

export const loginSchema = (t: any) => z.object({
  email: z.string()
    .email(t('emailInvalid'))
    .min(1, t('emailRequired')),
  password: z.string()
    .min(1, t('passwordRequired')),
});
