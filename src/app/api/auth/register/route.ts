import { registerUser } from '@/libs/auth';
import { NextResponse } from 'next/server';
import { getTranslations } from 'next-intl/server';

export async function POST(request: Request) {
  try {
    const { username, email, password } = await request.json();
    const t = await getTranslations('Auth');

    if (!username || !email || !password) {
      return NextResponse.json({ error: t('usernameEmailPasswordRequired') }, { status: 400 });
    }

    await registerUser(username, email, password);

    return NextResponse.json({ message: t('registrationSuccessful') }, { status: 201 });

  } catch (error: any) {
    console.error('Registration API error:', error);
    return NextResponse.json({ error: error.message || t('registrationFailed') }, { status: 500 });
  }
}
