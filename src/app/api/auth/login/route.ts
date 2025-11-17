import { NextRequest, NextResponse } from 'next/server';
import { loginUser } from '../../../../libs/auth';
import { getTranslations } from 'next-intl/server';

interface ErrorProps {
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    const t = await getTranslations('Auth');

    if (!email || !password) {
      return NextResponse.json({ message: t('emailAndPasswordRequired') }, { status: 400 });
    }

    const user = await loginUser(email, password);

    return NextResponse.json({ message: t('loginSuccessful'), user }, { status: 200 });
  } catch (error: unknown) {
    let errorMessage = 'An unknown error occurred';
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === 'object' && error !== null && 'message' in error) {
      errorMessage = (error as ErrorProps).message;
    }
    return NextResponse.json({ message: errorMessage }, { status: 401 });
  }
}
