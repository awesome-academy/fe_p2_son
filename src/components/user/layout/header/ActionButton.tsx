import SignInButton from '@/components/auth/SigninButton';
import { Button } from '@/stories/Button';
import { useTranslations } from 'next-intl';

export default function ActionButton() {
  const t = useTranslations('Header');

  return (
    <div className="flex items-center space-x-4">
      <SignInButton />
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-md">
        {t('getInTouch')}
      </button>
    </div>
  );
}
