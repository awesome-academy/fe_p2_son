interface CardProps {
  title: string;
  value: string;
  color: string;
}

export default function Card({
  title,
  value,
  color
}: CardProps) {
  return (
    <div className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg ${color} border-l-4 transition-transform hover:scale-[1.02] duration-300`}>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
        <p className="text-4xl font-bold text-gray-900 dark:text-white mt-2">{value}</p>
    </div>
  );
}
