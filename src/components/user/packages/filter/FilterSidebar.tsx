'use client';

import { useTranslations } from 'next-intl';
import FilterByPrice from './FilterByPrice';
import SearchForm from './SearchForm';

interface FilterSidebarProps {
  priceRange: [number, number];
  setPriceRange: (value: [number, number]) => void;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  whereQuery: string;
  setWhereQuery: (value: string) => void;
  dateQuery: string;
  setDateQuery: (value: string) => void;
}

export default function FilterSidebar({
  priceRange,
  setPriceRange = ([min, max]) => {},
  searchQuery,
  setSearchQuery = (q: string) => {},
  whereQuery,
  setWhereQuery = (q: string) => {},
  dateQuery,
  setDateQuery = (q: string) => {},
}: FilterSidebarProps) {
  const t = useTranslations('FilterSidebar');
  return (
    <aside className="bg-gray-50 rounded-xl ml-10 p-6 shadow-sm h-fit my-5">
      <h2 className="text-xl font-semibold mb-3">{t("planYourTrip")}</h2>
      <p className="text-sm text-gray-500 mb-6">
        {t('description')}
      </p>

      <SearchForm
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        whereQuery={whereQuery}
        setWhereQuery={setWhereQuery}
        dateQuery={dateQuery}
        setDateQuery={setDateQuery} />

      <FilterByPrice priceRange={priceRange} setPriceRange={setPriceRange} />

      <button className="bg-orange-500 text-white w-full py-2 rounded-lg hover:bg-orange-600 transition">
        {t('bookNow')}
      </button>
    </aside>
  );
};
