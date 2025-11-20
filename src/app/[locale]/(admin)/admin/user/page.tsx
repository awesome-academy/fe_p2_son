import { MainContent } from "@/components/admin/layout/MainContent";
import { GenericPageDetail } from "@/components/admin/layout/GenericPageDetail";

export default function AdminUserPage() {
  return (
    <MainContent>
      <GenericPageDetail
        title="Quản lý User"
        description="Quản lý thông tin và phân quyền cho người dùng."
      />
    </MainContent>
  )
}
