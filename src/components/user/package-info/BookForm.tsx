import React, { useState, useEffect } from 'react';
import { z } from 'zod';
import FormField from './FormField';
import TextAreaField from './TextAreaField';
import { FaRegUser } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { LuTicketsPlane } from "react-icons/lu";
import { AiOutlineMessage } from "react-icons/ai";
import { useTranslations } from 'next-intl';

export default function BookForm() {
  const t = useTranslations('BookForm');

  const bookFormSchema = z.object({
    name: z.string().min(1, t('nameRequired')),
    email: z.string().email(t('invalidEmail')),
    confirmEmail: z.string().email(t('invalidEmail')),
    phone: z.string().min(10, t('phoneMinLength')).max(15, t('phoneMaxLength')),
    date: z.string().min(1, t('dateRequired')),
    numberOfTickets: z.string().regex(/^\d+$/, t('ticketsMustBeNumber')).min(1, t('ticketsRequired')),
    message: z.string().optional(),
  }).refine((data) => data.email === data.confirmEmail, {
    message: t('emailsDoNotMatch'),
    path: ['confirmEmail'],
  });

  type BookFormData = z.infer<typeof bookFormSchema>;

  const [formData, setFormData] = useState<BookFormData>({
    name: '',
    email: '',
    confirmEmail: '',
    phone: '',
    date: '',
    numberOfTickets: '',
    message: '',
  });

  const [errors, setErrors] = useState<z.ZodFormattedError<BookFormData> | null>(null);
  const [demoSuccess, setDemoSuccess] = useState<boolean>(true);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors(null);
    setMessage(null);
  };

  const validateForm = () => {
    try {
      bookFormSchema.parse(formData);
      setErrors(null);
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(error.format());
      }
      return false;
    }
  };

  const handleCheckAvailability = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setTimeout(() => {
        if (demoSuccess) {
          setMessage({ type: 'success', text: t('availabilitySuccess') });
        } else {
          setMessage({ type: 'error', text: t('availabilityError') });
        }
      }, 1000);
    }
  };

  const handleBookNow = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setTimeout(() => {
        if (demoSuccess) {
          setMessage({ type: 'success', text: t('bookSuccess') });
          setFormData({
            name: '',
            email: '',
            confirmEmail: '',
            phone: '',
            date: '',
            numberOfTickets: '',
            message: '',
          });
        } else {
          setMessage({ type: 'error', text: t('bookError') });
        }
      }, 1000);
    }
  };

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('bookThisTour')}</h2>
      <p className="text-gray-600 mb-8">
        {t('bookFormDescription')}
      </p>
      <form>
        <FormField
          name="name"
          type="text"
          placeholder={t('namePlaceholder')}
          value={formData.name}
          onChange={handleChange}
          iconClass={<FaRegUser className='text-[#00000042]' />}
          errorMessage={errors?.name?._errors[0]}
        />
        <FormField
          name="email"
          type="email"
          placeholder={t('emailPlaceholder')}
          value={formData.email}
          onChange={handleChange}
          iconClass={<TfiEmail className='text-[#00000042]' />}
          errorMessage={errors?.email?._errors[0]}
        />
        <FormField
          name="confirmEmail"
          type="email"
          placeholder={t('confirmEmailPlaceholder')}
          value={formData.confirmEmail}
          onChange={handleChange}
          iconClass={<TfiEmail className='text-[#00000042]' />}
          errorMessage={errors?.confirmEmail?._errors[0]}
        />
        <FormField
          name="phone"
          type="tel"
          placeholder={t('phonePlaceholder')}
          value={formData.phone}
          onChange={handleChange}
          iconClass={<FiPhone className='text-[#00000042]' />}
          errorMessage={errors?.phone?._errors[0]}
        />
        <FormField
          name="date"
          type="date"
          placeholder={t('datePlaceholder')}
          value={formData.date}
          onChange={handleChange}
          iconClass={<MdOutlineCalendarMonth className='text-[#00000042]' />}
          errorMessage={errors?.date?._errors[0]}
        />
        <FormField
          name="numberOfTickets"
          type="text"
          placeholder={t('numberOfTicketsPlaceholder')}
          value={formData.numberOfTickets}
          onChange={handleChange}
          iconClass={<LuTicketsPlane className='text-[#00000042]' />}
          errorMessage={errors?.numberOfTickets?._errors[0]}
        />
        <TextAreaField
          name="message"
          placeholder={t('messagePlaceholder')}
          value={formData.message || ''}
          onChange={handleChange}
          iconClass={<AiOutlineMessage className='text-[#00000042]' />}
          errorMessage={errors?.message?._errors[0]}
        />
        <div className="flex flex-col space-y-4">
          {message && (
            <div className={`p-3 rounded-md text-white ${message.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
              {message.text}
            </div>
          )}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="demoSuccessToggle"
              checked={demoSuccess}
              onChange={(e) => setDemoSuccess(e.target.checked)}
              className="form-checkbox h-5 w-5 text-[#DF6951] rounded"
            />
            <label htmlFor="demoSuccessToggle" className="text-gray-700">
              {t('simulateSuccess')}
            </label>
          </div>
          <button
            type="submit"
            onClick={handleCheckAvailability}
            className="bg-[#DF6951] hover:bg-[#DF695126] text-white font-bold py-3 px-6 rounded-md cursor-pointer transition duration-300"
          >
            {t('checkAvailability')}
          </button>
          <button
            type="submit"
            onClick={handleBookNow}
            className="bg-[#DF6951] hover:bg-[#DF695126] text-white font-bold py-3 px-6 rounded-md cursor-pointer transition duration-300"
          >
            {t('bookNow')}
          </button>
        </div>
      </form>
    </div>
  );
}
