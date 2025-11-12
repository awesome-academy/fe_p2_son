import { PackagePlans } from "@/types/Package";
import { useTranslations } from 'next-intl';

interface TourPlanDayItemProps {
  plan: PackagePlans;
  index: number;
  isLastItem: boolean;
}

export default function TourPlanDayItem({ plan, isLastItem }: TourPlanDayItemProps) {
  const t = useTranslations('TourPlanDayItem');
  return (
    <div key={plan.day} className="flex items-stretch space-x-4">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 bg-[#DF6951] text-white rounded-md flex items-center justify-center font-bold text-lg">
          {plan.day < 10 ? `0${plan.day}` : plan.day}
        </div>
        {!isLastItem && (
            <div className="w-0.5 flex-grow border-l-2 border-dashed border-[#DF6951] overflow-visible -mb-6"></div>
        )}
      </div>
      <div className="flex-1">
        <h2 className="text-xl font-bold mb-2">{t('day', { day: plan.day })}: {plan.title}</h2>
        <p className="text-gray-700 mb-4">{plan.description}</p>
        <ul className="list-disc list-inside space-y-1">
          {plan.activities.map((activity, activityIndex) => (
            <li key={activityIndex} className="text-gray-600">
              {activity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
