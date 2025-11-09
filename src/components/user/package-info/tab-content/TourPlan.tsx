import { PackagePlans } from '@/types/Package';
import TourPlanDayItem from './TourPlanDayItem';

interface TourPlanProps {
  packagePlans: PackagePlans[];
}

export default function TourPlan({ packagePlans }: TourPlanProps) {
  return (
    <div className="space-y-8">
      {packagePlans.map((plan, index) => (
        <TourPlanDayItem
          key={plan.day}
          plan={plan}
          index={index}
          isLastItem={index === packagePlans.length - 1}
        />
      ))}
    </div>
  );
}
