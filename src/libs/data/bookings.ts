import { Booking } from '@/types/Booking';
import { Package } from '@/types/Package';
import { readJsonFile, writeJsonFile } from '../utils/db';

interface BookingWithPackage extends Booking {
  package?: Package;
}

export async function getBookingById(id: number): Promise<BookingWithPackage | null> {
  try {
    const data = await readJsonFile();

    const booking = data.bookings.find((b: Booking) => b.id === id);

    if (!booking) {
      return null;
    }

    const relatedPackage = data.packages.find((pkg: Package) => pkg.id === booking.packageId);

    return {
      ...booking,
      package: relatedPackage || undefined,
    };
  } catch (error) {
    console.error('Failed to read or parse db.json', error);
    return null;
  }
}

export async function updateBooking(id: number, updatedFields: Partial<Booking>): Promise<BookingWithPackage | null> {
  try {
    const data = await readJsonFile();

    const bookingIndex = data.bookings.findIndex((b: Booking) => b.id === id);

    if (bookingIndex === -1) {
      return null;
    }

    const updatedBooking = { ...data.bookings[bookingIndex], ...updatedFields };
    data.bookings[bookingIndex] = updatedBooking;

    await writeJsonFile(data);

    const relatedPackage = data.packages.find((pkg: Package) => pkg.id === updatedBooking.packageId);

    return {
      ...updatedBooking,
      package: relatedPackage || undefined,
    };
  } catch (error) {
    console.error('Failed to update booking in db.json', error);
    return null;
  }
}
