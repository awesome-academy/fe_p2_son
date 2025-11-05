import Link from "next/link";

interface LinkFooterProps {
  path: string;
  title: string;
}

export default function LinkFooter({
  path='',
  title=''
}: LinkFooterProps) {
  return (
    <Link
      href={path}
      className="hover:text-orange-500 transition-colors"
    >
      {title}
    </Link>
  )
}
