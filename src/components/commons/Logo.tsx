import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface LogoProp {
  color: string;
  width?: number;
  height?: number;
}

export default function Logo({
  color,
  width = 120,
  height = 50
}: LogoProp) {
  const t = useTranslations('Logo');
  return (
    <Link href="/" className="inline-block">
      <Image
        src={`/images/logo/logo-${color}.svg`}
        alt={t('alt')}
        width={width}
        height={height}
        priority
      />
    </Link>
  );
}
