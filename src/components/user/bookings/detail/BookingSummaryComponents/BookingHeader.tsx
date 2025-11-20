import { Booking } from '@/types/Booking';
import { useTranslations } from 'next-intl';

interface BookingHeaderProps {
  booking: Booking;
}

export default function BookingHeader({ booking }: BookingHeaderProps) {
  const t = useTranslations('BookingSummary');

  return (
    <>
      <div className="text-sm text-gray-500 mb-2">{t('tourCode')} : {booking.id}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-6 leading-tight">
        {booking.package?.title}
      </h3>
    </>
  );
}
