import React from 'react';

interface SubmitButtonProps {
  isSubmitting: boolean;
  icon: React.ReactNode;
}

export const SubmitButton = ({ isSubmitting, icon }: SubmitButtonProps) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={`w-full flex items-center justify-center space-x-2 px-8 py-3 
                bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 
                rounded-lg font-semibold transition-all duration-300 
                transform hover:scale-105 disabled:hover:scale-100`}
    >
      {isSubmitting ? (
        <>
          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Sending...</span>
        </>
      ) : (
        <>
          {icon}
          <span>Send Message</span>
        </>
      )}
    </button>
  );
};