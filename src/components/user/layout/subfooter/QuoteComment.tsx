import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

interface QuoteCommentProps {
  avatar: string;
  name: string;
  role: string;
  comment: string;
}

export default function QuoteComment({
  avatar,
  name,
  role,
  comment,
}: QuoteCommentProps) {
  return (
    <div className="relative bg-white/95 text-gray-800 rounded-2xl shadow-lg px-10 py-12 w-full max-w-2xl mx-auto">
      <div className="absolute -top-14 left-1/2 -translate-x-1/2">
        <Image
          src={avatar}
          alt={name}
          width={100}
          height={100}
          className="rounded-full border-4 border-white shadow-lg"
        />
      </div>

      <div className="flex justify-center mb-6 mt-6">
        <FaQuoteLeft className="w-10 h-10 text-gray-400 opacity-60" />
      </div>

      <p className="text-gray-700 italic text-center mb-6">{comment}</p>

      <p className="text-center text-gray-800 font-semibold">
        {name} - <span className="text-gray-500 font-normal">{role}</span>
      </p>
    </div>
  );
}
