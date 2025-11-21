import { Package } from "./Package";

export interface Booking {
  id: number;
  userId: number;
  package?: Package;
  status: 'completed' | 'upcoming' | 'cancelled';
  checkIn: string;
  checkOut: string;
  createdAt: string;
  name: string;
  email: string;
  phone: string;
  numberOfTickets: number;
  message?: string;
  paymentMethod?: string;
}
