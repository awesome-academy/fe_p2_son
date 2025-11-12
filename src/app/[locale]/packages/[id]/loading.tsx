import Content from "@/components/commons/Content";
import { useTranslations } from "next-intl";

export default function Loading() {
  const t = useTranslations('PackageDetailPage');

  return (
    <Content>
      {t('loading')}
    </Content>
  );
}
