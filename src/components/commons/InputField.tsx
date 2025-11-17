import React, { useState } from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';
import { AiOutlineEye as Eye, AiOutlineEyeInvisible as EyeOff } from 'react-icons/ai';

interface InputFieldProps {
  id: string;
  label: string;
  type: 'text' | 'email' | 'password';
  placeholder: string;
  icon: React.ElementType;
  register: UseFormRegister<any>;
  name: string;
  error?: FieldError;
  iconClassName?: string;
  inputClassName?: string;
}

export default function InputField({
  id,
  label,
  type,
  placeholder,
  icon: Icon,
  register,
  name,
  error,
  iconClassName = 'w-5 h-5',
  inputClassName = 'pl-10 pr-4 py-3',
}: InputFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordField = type === 'password';

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative">
        <Icon className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 ${iconClassName}`} />
        <input
          id={id}
          type={isPasswordField && showPassword ? 'text' : type}
          {...register(name)}
          className={`w-full border rounded-lg focus:outline-none focus:ring-2 transition-all ${inputClassName} ${
            error
              ? 'border-red-300 focus:ring-red-200'
              : 'border-gray-300 focus:ring-blue-200'
          } ${isPasswordField ? 'pr-12' : ''}`}
          placeholder={placeholder}
        />
        {isPasswordField && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error.message}</p>
      )}
    </div>
  );
}
