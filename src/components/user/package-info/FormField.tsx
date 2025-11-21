import React from 'react';

interface FormFieldProps {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  iconClass: React.ReactNode;
  errorMessage?: string;
  disabled?: boolean;
  label?: string;
}

export default function FormField({
  name,
  type,
  placeholder,
  value,
  onChange,
  iconClass,
  errorMessage,
  disabled = false,
  label,
}: FormFieldProps) {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          {iconClass}
        </span>
        <input
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-3 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      </div>
      <p className="text-red-500 text-sm mt-1 min-h-[1.5rem]">
        {errorMessage}
      </p>
    </div>
  );
}
