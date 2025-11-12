import { getTranslations } from "next-intl/server";
import { fetchPackageData } from "@/libs/api/packages";
import PackageContent from "@/components/user/package-info/PackageContent";
import { Metadata } from "next";
import Content from "@/components/commons/Content";

interface PackageDetailPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({
  params
}: PackageDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const packageData = await fetchPackageData(id);
  const t = await getTranslations('PackageDetailPage');

  if (!packageData) {
    return {
      title: t('noPackageFound'),
    };
  }

  return {
    title: packageData.title,
    description: packageData.description,
    openGraph: {
      title: packageData.title,
      description: packageData.description,
      images: packageData.images && packageData.images.length > 0 ? [packageData.images[0]] : [],
    },
  };
}

export default async function PackageDetailPage({
   params
}: PackageDetailPageProps) {
  const { id } = await params;
  const t = await getTranslations('PackageDetailPage');
  const packageData = await fetchPackageData(id);

  if (!packageData) {
    return (
      <Content>
        {t("noPackageFound")}
      </Content>
    )
  }

  return (
    <Content>
      <PackageContent packageData={packageData} />
    </Content>
  )
}
