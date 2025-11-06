'use client';

import { Suspense } from 'react';
import PackageList from './PackageList';
import Pagination from './Pagination';
import SortTools from './SortTools';
import { Package } from '@/types/Package';
import PackageListSkeleton from './PackageListSkeleton';

interface PackagesContentProps {
  packages: Package[];
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function PackagesContent({
  packages,
  totalPages,
  currentPage,
  onPageChange = () => {},
}: PackagesContentProps) {
  return (
    <div className="lg:col-span-2 p-5">
      <Suspense fallback={<PackageListSkeleton />}>
        <PackageList packages={packages} />
      </Suspense>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}
