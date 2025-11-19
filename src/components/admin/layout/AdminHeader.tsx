'use client';

import LanguageSelector from '@/components/commons/UserMenu/LanguageSelector';
import { MdMenu } from 'react-icons/md';

interface AdminHeaderProps {
  onMenuClick: () => void;
}

export function AdminHeader({ onMenuClick }: AdminHeaderProps) {
  return (
    <header className="bg-white shadow-md p-4 top-0 z-30">
      <div className="flex justify-between items-center">
        <button
          onClick={onMenuClick}
          className="p-2 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors"
          aria-label="Toggle Menu"
        >
          <MdMenu className="w-7 h-7" />
        </button>
        <LanguageSelector />
      </div>
    </header>
  );
}
