'use client';

import { FiCalendar, FiArrowDown, FiArrowUp, FiType } from 'react-icons/fi';
import { useTranslations } from 'next-intl';

interface SortToolsProps {
  sortType: string;
  setSortType: (value: string) => void;
}

export default function SortTools({
  sortType,
  setSortType = () => {}
}: SortToolsProps) {
  const t = useTranslations("SortTools");

  return (
    <div className="flex flex-wrap p-7 justify-between items-center text-sm font-medium text-gray-700 bg-gray-100">
      <button onClick={() => setSortType("date")} className={sortType === "date" ? "text-blue-600" : ""}>
        <FiCalendar className="inline-block w-4 h-4 mr-1" /> {t("date")}
      </button>
      <button onClick={() => setSortType("low-high")} className={sortType === "low-high" ? "text-blue-600" : ""}>
        <FiArrowDown className="inline-block w-4 h-4 mr-1" /> {t("priceLowToHigh")}
      </button>
      <button onClick={() => setSortType("high-low")} className={sortType === "high-low" ? "text-blue-600" : ""}>
        <FiArrowUp className="inline-block w-4 h-4 mr-1" /> {t("priceHighToLow")}
      </button>
      <button onClick={() => setSortType("name")} className={sortType === "name" ? "text-blue-600" : ""}>
        <FiType className="inline-block w-4 h-4 mr-1" /> {t("nameAZ")}
      </button>
    </div>
  );
};
