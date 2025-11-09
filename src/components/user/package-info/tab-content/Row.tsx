interface RowProps {
  label: string;
  value: React.ReactNode;
}

export default function Row({
  label,
  value
}: RowProps) {
  return (
    <div className="flex gap-2 my-3 items-baseline">
      <span className="w-1/4 font-bold text-lg text-[#DF6951]">{label}:</span>
      <span className="w-3/4 flex-1">{value}</span>
    </div>
  );
}
