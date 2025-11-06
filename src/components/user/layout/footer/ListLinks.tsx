import LinkFooter from "./LinkFooter";

interface LinkItem {
  title: string;
  path: string;
}

interface ListLinksProps {
  title: string;
  linkItems: LinkItem[];
}

export default function ListLinks({
  title='',
  linkItems
}: ListLinksProps) {

  return (
    <div>
      <h3 className="font-semibold mb-3">{title}</h3>
      <ul className="space-y-2 text-sm">
        {linkItems.map((item) => (
          <li key={item.path}>
            <LinkFooter path={item.path} title={item.title} />
          </li>
        ))}
      </ul>
    </div>
  )
}
