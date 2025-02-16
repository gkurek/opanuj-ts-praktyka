import React from 'react';
import { useSurveyContext } from './context';

interface Option {
  value: string;
  label: string;
}

interface ChoiceProps {
  name: string;
  label: string;
  options: Option[];
  required?: boolean;
}

export const Choice: React.FC<ChoiceProps> = ({ name, label, options, required }) => {
  const { values, setValues } = useSurveyContext();

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium text-gray-200">
        {label}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        value={values[name] || ''}
        onChange={(e) => setValues({ ...values, [name]: e.target.value })}
        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-200"
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}; 