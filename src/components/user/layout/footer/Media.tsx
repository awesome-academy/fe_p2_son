import { FaInfinity } from 'react-icons/fa';
import { FiLinkedin, FiTwitter, FiMessageCircle } from 'react-icons/fi';
import { useTranslations } from 'next-intl';
import Logo from '@/components/commons/Logo';
import Link from 'next/link';

export default function Media() {
  const t = useTranslations('Footer');

  return (
    <div>
      <Logo color={'black'} width={120} />
      <p className="text-sm mt-3">{t('description')}</p>
      <div className="flex gap-3 mt-4 text-orange-500">
        <Link href="#"><FiLinkedin size={18} /></Link>
        <Link href="#"><FiMessageCircle size={18} /></Link>
        <Link href="#"><FiTwitter size={18} /></Link>
        <Link href="#"><FaInfinity size={18} /></Link>
      </div>
    </div>
  )
}
