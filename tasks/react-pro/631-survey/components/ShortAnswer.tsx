import React from 'react';
import { useSurveyContext } from './context';

interface ShortAnswerProps {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
}

export const ShortAnswer: React.FC<ShortAnswerProps> = ({
  name,
  label,
  placeholder,
  required,
}) => {
  const { values, setValues } = useSurveyContext();

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium text-gray-200">
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        value={values[name] || ''}
        onChange={(e) => setValues({ ...values, [name]: e.target.value })}
        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-200 placeholder-gray-500"
      />
    </div>
  );
}; 