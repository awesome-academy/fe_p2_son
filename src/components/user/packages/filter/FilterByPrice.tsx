import { useTranslations } from 'next-intl';
import RangeSlider from '@/components/commons/RangeSlider';
import { DEFAULT_PRICE_MAX, DEFAULT_PRICE_MIN } from '@/constants/packages';

interface FilterByPriceProps {
  priceRange: [number, number];
  setPriceRange: (value: [number, number]) => void;
}

export default function FilterByPrice({
  priceRange,
  setPriceRange = () => {}
}: FilterByPriceProps) {
  const t = useTranslations('FilterByPrice');

  const handleMinPriceChange = (newMin: number) => {
    setPriceRange([Math.min(newMin, priceRange[1]), priceRange[1]]);
  };

  const handleMaxPriceChange = (newMax: number) => {
    setPriceRange([priceRange[0], Math.max(newMax, priceRange[0])]);
  };

  return (
    <div className="mb-6">
      <h3 className="font-medium mb-3">{t("filterByPrice")}</h3>

      <div className="relative pt-2 pb-6">
        <div className="relative h-1 bg-gray-200 rounded">
          <div
            className="absolute h-1 bg-orange-500 rounded"
            style={{
              left: `${((priceRange[0] - DEFAULT_PRICE_MIN) / (DEFAULT_PRICE_MAX - DEFAULT_PRICE_MIN)) * 100}%`,
              right: `${100 - ((priceRange[1] - DEFAULT_PRICE_MIN) / (DEFAULT_PRICE_MAX - DEFAULT_PRICE_MIN)) * 100}%`
            }}
          />
        </div>

        <RangeSlider
          min={DEFAULT_PRICE_MIN}
          max={DEFAULT_PRICE_MAX}
          value={priceRange[0]}
          onChange={handleMinPriceChange}
        />

        <RangeSlider
          min={DEFAULT_PRICE_MIN}
          max={DEFAULT_PRICE_MAX}
          value={priceRange[1]}
          onChange={handleMaxPriceChange}
        />
      </div>

      <p className="text-sm text-gray-600">
        {t('price')}: ${priceRange[0]} - ${priceRange[1]}
      </p>
    </div>
  );
}
