import Card from './Card';

export default function DashboardCardGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card title="Booking mới" value="125" color="border-indigo-500" />
        <Card title="Tổng User" value="4.5K" color="border-green-500" />
        <Card title="Doanh thu (Tháng)" value="$50,000" color="border-yellow-500" />
        <Card title="Package hoạt động" value="32" color="border-sky-500" />
    </div>
  );
};
