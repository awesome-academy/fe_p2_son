import { Booking } from '@/types/Booking';
import { useTranslations } from 'next-intl';
import { CURRENCY_SYMBOL } from '@/constants/package-info';

interface BookingTicketsProps {
  booking: Booking;
}

export default function BookingTickets({ booking }: BookingTicketsProps) {
  const t = useTranslations('BookingSummary');
  const numberOfTickets = booking.numberOfTickets || 0;
  const ticketPrice = booking.package?.price || 0;

  return (
    <div className="space-y-4 mb-6">
      <div className="flex justify-between items-center">
        <span className="text-gray-700">{t('numberOfTickets')}:</span>
        <span className="font-semibold text-gray-900">{numberOfTickets} x {ticketPrice.toLocaleString()} {CURRENCY_SYMBOL}</span>
      </div>
    </div>
  );
}
