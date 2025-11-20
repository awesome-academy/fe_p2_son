'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

interface LogoutConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const LogoutConfirmModal: React.FC<LogoutConfirmModalProps> = ({ isOpen, onClose, onConfirm }) => {
  const t = useTranslations('Login');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-sm">
      <div className="bg-gray-800 p-6 rounded-lg shadow-xl text-white max-w-sm w-full">
        <h3 className="text-xl font-semibold mb-4">{t('confirmLogoutTitle')}</h3>
        <p className="mb-6">{t('confirmLogoutMessage')}</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-600 hover:bg-gray-700 transition-colors"
          >
            {t('cancelBtn')}
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition-colors"
          >
            {t('logoutBtn')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutConfirmModal;
