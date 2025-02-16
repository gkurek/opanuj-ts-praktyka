import React from 'react';

interface SubmitProps {
  children: React.ReactNode;
}

export const Submit: React.FC<SubmitProps> = ({ children }) => {
  return (
    <button
      type="submit"
      className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      {children}
    </button>
  );
}; 