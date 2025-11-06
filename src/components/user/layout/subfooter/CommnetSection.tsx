'use client';

import { useState } from 'react';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import QuoteComment from './QuoteComment';
import { testimonials } from '@/constants/subfooter';

export default function CommnetSection() {
  const comments = testimonials;
  const [current, setCurrent] = useState(0);
  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % comments.length);
  const prevSlide = () =>
    setCurrent((prev) =>
      prev === 0 ? comments.length - 1 : prev - 1
    );

  const testimonial = comments[current];

  return (
    <div className="relative mt-10 px-10 py-12 w-full max-w-2xl mx-auto">
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-100 hover:bg-orange-100 p-2 rounded-full shadow"
      >
        <FaLongArrowAltLeft className="w-6 h-6 text-gray-600" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-100 hover:bg-orange-100 p-2 rounded-full shadow"
      >
        <FaLongArrowAltRight className="w-6 h-6 text-gray-600" />
      </button>

      <QuoteComment
        avatar={testimonial.avatar}
        name={testimonial.name}
        role={testimonial.role}
        comment={testimonial.comment}
      />

      <div className="flex justify-center mt-8 space-x-1">
        {comments.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-10 h-1 rounded-sm ${
              index === current
                ? 'bg-orange-500 scale-110'
                : 'bg-white hover:bg-orange-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
