import { Booking } from '@/types/Booking';
import BookingHeader from './BookingSummaryComponents/BookingHeader';
import BookingDates from './BookingSummaryComponents/BookingDates';
import BookingTickets from './BookingSummaryComponents/BookingTickets';
import BookingTotal from './BookingSummaryComponents/BookingTotal';
import CancelButton from './BookingSummaryComponents/CancelButton';

interface BookingSummaryProps {
  booking: Booking;
}

export default function BookingSummary({ booking }: BookingSummaryProps) {
  const numberOfTickets = booking.numberOfTickets || 0;
  const ticketPrice = booking.package?.price || 0;
  const total = numberOfTickets * ticketPrice;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8">
      <BookingHeader booking={booking} />
      <BookingDates booking={booking} />
      <BookingTickets booking={booking} />
      <BookingTotal total={total} />
      <CancelButton />
    </div>
  );
}
