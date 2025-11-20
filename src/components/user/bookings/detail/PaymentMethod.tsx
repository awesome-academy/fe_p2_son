'use client';
import { FaCreditCard } from 'react-icons/fa';
import { Booking } from '@/types/Booking';
import { useTranslations } from 'next-intl';

interface PaymentMethodProps {
  booking: Booking;
  onBookingChange: (updatedFields: Partial<Booking>) => void;
}

export default function PaymentMethod({ booking, onBookingChange }: PaymentMethodProps) {
  const t = useTranslations('PaymentMethod');
  return (
    <div className="bg-white rounded-xl shadow-sm p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('title')}</h2>

      <div className="flex items-center p-4 border-2 border-gray-200 rounded-lg hover:border-orange-500 transition-colors cursor-pointer">
        <input
          type="radio"
          name="paymentMethod"
          id="transfer"
          checked={booking.paymentMethod === 'transfer'}
          onChange={() => onBookingChange({ paymentMethod: 'transfer' })}
          className="w-4 h-4 text-orange-500 mr-4"
        />
        <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-full mr-4">
          <FaCreditCard className="text-white" size={20} />
        </div>
        <label htmlFor="transfer" className="text-gray-900 font-medium cursor-pointer">
          {t('transferPayment')}
        </label>
      </div>
    </div>
  );
}
