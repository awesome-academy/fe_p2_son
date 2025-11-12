import { Package } from '@/types/Package';
import Link from 'next/dist/client/link';
import Image from 'next/image';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { HiOutlineUserGroup } from 'react-icons/hi2';
import { IoIosStar } from 'react-icons/io';
import { useTranslations } from 'next-intl';

interface PackageCardProps {
  pkg: Package;
}

export default function PackageCard ({
   pkg
}: PackageCardProps) {
  const t = useTranslations('PackageCard');

  return (
    <div key={pkg.id} className="rounded-xl hover:shadow-lg transition">
      <div className="w-full h-48 relative">
        <Image
          src={pkg.img}
          alt={pkg.title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
      </div>
      <div className="flex bg-[#DF6951] text-white text-xs px-2 py-1 w-full justify-between">
        <div className="flex gap-3">
          <FaRegCalendarAlt />
          {pkg.deadline}
        </div>
        <div className="flex gap-2">
          <HiOutlineUserGroup size={16} />
          {pkg.participants} {t('participants')}
        </div>
      </div>
      <div className="p-4">
        <Link href={`/packages/${pkg.id}`}>
          <h3 className="font-semibold text-lg">{pkg.title}</h3>
        </Link>
        <p className="text-sm text-gray-500 mt-1">
          {pkg.shortDescription}
        </p>
        <div className="flex justify-between items-center mt-3">
          <p className="font-semibold text-orange-500">{t('price', { price: pkg.price })}</p>
          <p className="flex text-sm text-gray-600 gap-2"><IoIosStar color="#DF6951" size={18} /> {pkg.rating}</p>
        </div>
      </div>
    </div>
  );
};
