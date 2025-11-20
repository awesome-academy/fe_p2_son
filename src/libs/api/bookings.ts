import { Booking } from '../../types/Booking';

export const fetchBookingsAPI = async (): Promise<Booking[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/bookings`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data: Booking[] = await response.json();
  return data;
};

export const fetchBookingByIdAPI = async (id: number): Promise<Booking> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/bookings/${id}`);

  if (!response.ok) {
    console.error(`HTTP error fetching booking ${id}:`, response.status, response.statusText);
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data: Booking = await response.json();
  return data;
};

export const updateBookingAPI = async (id: number, updatedBooking: Partial<Booking>): Promise<Booking> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/bookings/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedBooking),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data: Booking = await response.json();
  return data;
};
