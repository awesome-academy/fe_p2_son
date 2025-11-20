import React from 'react';

interface GenericPageDetailProps {
  title: string;
  description: string;
}

export const GenericPageDetail: React.FC<GenericPageDetailProps> = ({ title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-600">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Chi tiết Trang {title}</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
            Đây là khu vực hiển thị bảng dữ liệu, form chỉnh sửa, và các công cụ quản lý liên quan đến {title.toLowerCase()}.
        </p>
        <div className="mt-6">
            <button className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition duration-150">
                Thêm mới
            </button>
        </div>
    </div>
  );
};
