import { renderStars } from '@/utils/renderStars';
import { MdOutlineCancel } from 'react-icons/md';
import { MdOutlineCheckCircleOutline } from 'react-icons/md';
import Row from './Row';
import { useTranslations } from 'next-intl';
import { CURRENCY_SYMBOL } from '@/constants/package-info';

type TourInfoProps = {
  title: string;
  price: number;
  reviews: number;
  description: string;
  destination: string;
  departure: string;
  departureTime: string;
  returnTime: string;
  dressCode: string;
  notIncluded: string[];
  included: string[];
};

export default function TourInformation({
  title,
  price,
  reviews,
  description,
  destination,
  departure,
  departureTime,
  returnTime,
  dressCode,
  notIncluded,
  included,
}: TourInfoProps) {
  const t = useTranslations('TourInformation');
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-baseline gap-2">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-2xl font-bold text-[#DF6951]">{price} {CURRENCY_SYMBOL} <span className="text-gray-500 text-sm">/ {t('perCouple')}</span></p>
      </div>

      <div className="flex items-center gap-2">
        {renderStars(reviews)}
        <p className="text-sm text-gray-500"> ({reviews}{t('kReview')})</p>
      </div>

      <p className="leading-6 text-gray-700">{description}</p>

      <div className="space-y-2 text-sm text-gray-700">
        <Row label={t('destination')} value={destination} />
        <Row label={t('departure')} value={departure} />
        <Row label={t('departureTime')} value={departureTime} />
        <Row label={t('returnTime')} value={returnTime} />
        <Row label={t('dressCode')} value={dressCode} />

        <div className="my-4">
          <Row label={t('notIncluded')}
            value={
              <ul className="grid grid-cols-2 gap-y-3 text-sm pr-20">
                {notIncluded.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <MdOutlineCancel /> <span>{item}</span>
                  </li>
                ))}
              </ul>
            } />
        </div>

        <Row label={t('included')}
          value={
            <ul className="grid grid-cols-2 gap-y-3 text-sm pr-20">
              {included.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-700">
                  <MdOutlineCheckCircleOutline /> <span>{item}</span>
                </li>
              ))}
            </ul>
          } />
      </div>
    </div>
  );
}
