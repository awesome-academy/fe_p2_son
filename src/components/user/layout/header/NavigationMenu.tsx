import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { sidebarItems } from '@/constants/header';
import { normalizedPath } from '@/utils/normalizedPath';
import { useTranslations } from 'next-intl';

export default function NavigationMenu() {
  const t = useTranslations('Header');
  const items = sidebarItems(t);
  const pathname = usePathname();

  const currentItem =
    items.find((item) => item.path === normalizedPath(pathname)) || items[0];

  return (
    <div className="flex items-center space-x-8">
      {items.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={`pb-1 text-sm font-medium transition-all ${
            pathname === item.path || currentItem.path === item.path
              ? "border-b-2 border-orange-500 text-white"
              : "text-gray-200 hover:text-white hover:border-b-2 hover:border-gray-200"
          }`}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
}
