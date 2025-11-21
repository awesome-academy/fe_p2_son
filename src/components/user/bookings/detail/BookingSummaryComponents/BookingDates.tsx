import { Booking } from '@/types/Booking';
import { formatToDDMMYYYY } from '@/utils/formatDate';
import { useTranslations } from 'next-intl';

interface BookingDatesProps {
  booking: Booking;
}

export default function BookingDates({ booking }: BookingDatesProps) {
  const t = useTranslations('BookingSummary');

  return (
    <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">{t('checkInDate')} :</span>
        <span className="text-gray-900">{formatToDDMMYYYY(booking.checkIn)}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">{t('checkOutDate')} :</span>
        <span className="text-gray-900">{formatToDDMMYYYY(booking.checkOut)}</span>
      </div>
    </div>
  );
}
