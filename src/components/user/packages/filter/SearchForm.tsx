import { useTranslations } from 'next-intl';

interface SearchFormProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  whereQuery: string;
  setWhereQuery: (q: string) => void;
  dateQuery: string;
  setDateQuery: (q: string) => void;
}

export default function SearchForm({
  searchQuery='',
  setSearchQuery = (q: string) => {},
  whereQuery='',
  setWhereQuery = (q: string) => {},
  dateQuery='',
  setDateQuery = (q: string) => {}
}: SearchFormProps) {
  const t = useTranslations('SearchForm');

  return (
    <div className="space-y-3 mb-6">
      <input
        type="text"
        placeholder={t('searchTour')}
        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <input
        type="text"
        placeholder={t('whereTo')}
        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
        value={whereQuery}
        onChange={(e) => setWhereQuery(e.target.value)}
      />
      <input
        type="date"
        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
        value={dateQuery}
        onChange={(e) => setDateQuery(e.target.value)}
      />
    </div>
  )
}
