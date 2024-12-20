import React from 'react';

interface FormTextAreaProps {
  label: string;
  name: string;
  value: string;
  error?: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const FormTextArea = ({
  label,
  name,
  value,
  error,
  required,
  onChange
}: FormTextAreaProps) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-2">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={5}
        className={`w-full px-4 py-3 bg-gray-800/50 border ${
          error ? 'border-red-400' : 'border-gray-700'
        } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 
        transition-colors duration-300 text-white placeholder-gray-400 resize-none`}
      />
      {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
    </div>
  );
};