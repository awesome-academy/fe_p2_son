import React from 'react';

const PackageCardSkeleton: React.FC = () => (
  <div className="rounded-xl bg-gray-200 animate-pulse h-72">
    <div className="w-full h-48 bg-gray-300 rounded-t-xl"></div>
    <div className="p-4">
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-3 bg-gray-300 rounded w-full mb-4"></div>
      <div className="flex justify-between items-center">
        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/6"></div>
      </div>
    </div>
  </div>
);

const PackageListSkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {[...Array(6)].map((_, index) => (
        <PackageCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default PackageListSkeleton;
