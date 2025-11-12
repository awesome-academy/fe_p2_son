import React from 'react';

interface FormFieldProps {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  iconClass: React.ReactNode;
  errorMessage?: string;
}

export default function FormField({
  name,
  type,
  placeholder,
  value,
  onChange,
  iconClass,
  errorMessage,
}: FormFieldProps) {
  return (
    <div className="mb-4">
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          {iconClass}
        </span>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-3 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          value={value}
          onChange={onChange}
        />
      </div>
      <p className="text-red-500 text-sm mt-1 min-h-[1.5rem]">
        {errorMessage}
      </p>
    </div>
  );
}
