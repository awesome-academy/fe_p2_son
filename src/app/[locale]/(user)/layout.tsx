import Header from '@/components/user/layout/header/Header';
import Subfooter from '@/components/user/layout/subfooter/Subfooter';
import Footer from '@/components/user/layout/footer/Footer';

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Subfooter />
      <Footer />
    </>
  );
}
