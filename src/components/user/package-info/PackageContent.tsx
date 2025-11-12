'use client';

import { useState } from 'react';
import { TabContent } from '@/components/user/package-info/tab-content/TabContent';
import TabMenu from '@/components/user/package-info/TabMenu';
import { Package } from '@/types/Package';
import BookForm from '@/components/user/package-info/BookForm';

interface PackageContentProps {
  packageData: Package;
}

export default function PackageContent({ packageData }: PackageContentProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-8">
      <TabMenu onChange={(i) => setActive(i)} />
      <div className="flex gap-8">
        <div className="w-[60%]">
          <TabContent active={active} packageData={packageData} />
        </div>
        <div className="w-[40%]">
          <BookForm />
        </div>
      </div>
    </div>
  );
}
