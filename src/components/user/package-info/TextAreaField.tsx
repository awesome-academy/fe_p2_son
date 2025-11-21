import React from 'react';

interface TextAreaFieldProps {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  iconClass: React.ReactNode;
  errorMessage?: string;
  rows?: number;
  disabled?: boolean;
  label?: string;
}

export default function TextAreaField({
  name,
  placeholder,
  value,
  onChange,
  iconClass,
  errorMessage,
  rows = 2,
  disabled = false,
  label,
}: TextAreaFieldProps) {
  return (
    <div className="mb-6">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        <span className="absolute top-2 flex items-center pl-3 pt-2">
          {iconClass}
        </span>
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          rows={rows}
          className="w-full pl-10 pr-4 py-3 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 resize-y"
          value={value}
          onChange={onChange}
          disabled={disabled}
        ></textarea>
        {errorMessage && (
          <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
        )}
      </div>
    </div>
  );
}
