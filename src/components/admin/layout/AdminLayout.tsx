'use client';

import React, { useState } from 'react';
import { signOut } from 'next-auth/react';
import { AdminHeader } from '@/components/admin/layout/AdminHeader';
import { AdminSidebar } from './Sidebar';
import LogoutConfirmModal from './LogoutConfirmModal';
import { MainContent } from './MainContent';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  const handleOpenLogoutModal = () => setIsLogoutModalOpen(true);
  const handleCloseLogoutModal = () => setIsLogoutModalOpen(false);
  
  const handleConfirmLogout = async () => {
    setIsLogoutModalOpen(false);
    await signOut({ callbackUrl: '/login' });
  };

  return (
    <div className="flex min-h-screen bg-gray-100 transition-colors duration-300">
      <AdminSidebar
        isSidebarOpen={isSidebarOpen}
        closeSidebar={closeSidebar}
        onOpenLogoutModal={handleOpenLogoutModal}
      />

      <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <AdminHeader onMenuClick={toggleSidebar} />

        <main className="flex-1 overflow-y-auto">
          <MainContent>
            {children}
          </MainContent>
        </main>
      </div>

      <LogoutConfirmModal
        isOpen={isLogoutModalOpen}
        onClose={handleCloseLogoutModal}
        onConfirm={handleConfirmLogout}
      />
    </div>
  );
}
