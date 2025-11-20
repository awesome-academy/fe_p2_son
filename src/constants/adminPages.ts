import {
  MdDashboard, MdBook, MdOutlineShoppingBag, MdPeople
} from 'react-icons/md';

export interface AdminPageTab {
  id: string;
  label: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const ADMIN_PAGE_TABS: AdminPageTab[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    path: '/admin/dashboard',
    icon: MdDashboard,
  },
  {
    id: 'booking',
    label: 'Booking',
    path: '/admin/booking',
    icon: MdBook,
  },
  {
    id: 'package',
    label: 'Package',
    path: '/admin/package',
    icon: MdOutlineShoppingBag,
  },
  {
    id: 'user',
    label: 'User',
    path: '/admin/user',
    icon: MdPeople,
  },
];
