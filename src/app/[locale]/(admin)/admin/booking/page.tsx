import { MainContent } from "@/components/admin/layout/MainContent";
import { GenericPageDetail } from "@/components/admin/layout/GenericPageDetail";

export default function AdminBookingPage() {
  return (
    <MainContent>
      <GenericPageDetail
        title="Quản lý Booking"
        description="Xem và xử lý các đơn đặt chỗ của khách hàng."
      />
    </MainContent>
  )
}
