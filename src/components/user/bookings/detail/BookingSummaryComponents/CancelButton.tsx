import { useTranslations } from 'next-intl';

export default function CancelButton() {
  const t = useTranslations('BookingSummary');

  return (
    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-colors duration-200 shadow-md">
      {t('cancelTour')}
    </button>
  );
}
