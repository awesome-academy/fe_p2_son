import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { GALLERY_IMAGES } from '@/constants/package-info';

export default function GalleryContent() {
  const t = useTranslations('GalleryContent');

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('title')}</h2>
      <p className="text-gray-600 mb-8">
        {t('description')}
      </p>
      {GALLERY_IMAGES.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((src, index) => (
            <div key={index} className="rounded-lg shadow-lg w-full h-48 relative overflow-hidden">
              <Image
                src={src}
                alt={t('imageAlt', { index: index + 1 })}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-center">{t('noImagesAvailable')}</p>
      )}
    </div>
  );
}
