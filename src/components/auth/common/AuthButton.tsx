import React from 'react';
import Spinner from '../../commons/Spinner';

interface AuthButtonProps {
  onClick: () => void;
  isSubmitting: boolean;
  content: React.ReactNode;
  processingText: string;
}

const AuthButton: React.FC<AuthButtonProps> = ({
  onClick,
  isSubmitting,
  content,
  processingText,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isSubmitting}
      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
    >
      {isSubmitting ? (
        <Spinner text={processingText} />
      ) : (
        content
      )}
    </button>
  );
};

export default AuthButton;
