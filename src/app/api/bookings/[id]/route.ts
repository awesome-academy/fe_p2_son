import { NextResponse } from 'next/server';
import { getBookingById, updateBooking } from '@/libs/data/bookings';

interface RequestProps {
  params: {
    id: string
  }
}

export async function GET(
  request: Request,
  { params }: RequestProps
) {
  const id = Number((await params).id);

  if (isNaN(id)) {
    return NextResponse.json({ message: 'Invalid ID' }, { status: 400 });
  }

  const booking = await getBookingById(id);

  if (!booking) {
    return NextResponse.json({ message: 'Booking not found' }, { status: 404 });
  }

  return NextResponse.json(booking);
}

export async function PUT(
  request: Request,
  { params }: RequestProps
) {
  const id = Number((await params).id);

  if (isNaN(id)) {
    return NextResponse.json({ message: 'Invalid ID' }, { status: 400 });
  }

  const body = await request.json();
  const updatedBooking = await updateBooking(id, body);

  if (!updatedBooking) {
    return NextResponse.json({ message: 'Booking not found or update failed' }, { status: 404 });
  }

  return NextResponse.json(updatedBooking);
}
