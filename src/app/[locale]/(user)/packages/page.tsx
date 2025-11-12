import PackagesClient from '@/components/user/packages/PackagesClient';
import { fetchPackages } from '@/libs/api/packages';


export default async function PackagesPage() {
  const initialData = await fetchPackages();

  return (
    <div className="container mx-auto px-[7%] py-10">
      <PackagesClient
        initialPackages={initialData.packages}
        initialTotalPages={initialData.totalPages}
        initialCurrentPage={initialData.currentPage}
      />
    </div>
  );
}
