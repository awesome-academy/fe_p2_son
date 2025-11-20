'use client';

import { useTranslations } from 'next-intl';
import { MdLogout } from 'react-icons/md';

interface AdminLogoutButtonProps {
  onOpenModal: () => void;
}

export default function AdminLogoutButton({ onOpenModal }: AdminLogoutButtonProps) {
  const t = useTranslations('Login');

  return (
    <button
      onClick={onOpenModal}
      className="flex items-center w-full p-3 rounded-xl transition-all duration-200 text-left text-gray-300 hover:bg-gray-700 hover:text-white"
    >
      <MdLogout className="w-5 h-5 mr-3" />
      <span className="font-medium">{t('logoutBtn')}</span>
    </button>
  );
}
