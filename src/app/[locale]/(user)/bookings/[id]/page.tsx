import { notFound } from 'next/navigation';
import { fetchBookingByIdAPI } from '@/libs/api/bookings';
import BookingDetailClient from '@/components/user/bookings/detail/BookingDetailClient';

interface BookingDetailProps {
  params: {
    id: string
  }
}

export default async function BookingDetail({
  params
}: BookingDetailProps) {
  const id = Number((await params).id);

  const booking = await fetchBookingByIdAPI(id);

  if (!booking) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <BookingDetailClient initialBooking={booking} />
      </div>
    </div>
  );
}
