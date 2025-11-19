import { MainContent } from "@/components/admin/layout/MainContent";
import { GenericPageDetail } from "@/components/admin/layout/GenericPageDetail";

export default function AdminPackagePage() {
  return (
    <MainContent>
      <GenericPageDetail
        title="Quản lý Package"
        description="Thêm, sửa, hoặc xóa các gói dịch vụ/sản phẩm."
      />
    </MainContent>
  )
}
