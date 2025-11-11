import PackageCard from './PackageCard';
import { Package } from '@/types/Package';

interface PackageListProps {
  packages: Package[];
}

export default function PackageList ({
   packages
}: PackageListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 my-5">
      {packages.map((pkg) => (
        <PackageCard key={pkg.id} pkg={pkg} />
      ))}
    </div>
  );
};
