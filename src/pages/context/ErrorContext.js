import React, { createContext, useContext, useState } from 'react';

// Create the Error Context
const ErrorContext = createContext();

// Custom hook to use the ErrorContext
export const useErrorContext = () => useContext(ErrorContext);

// Provider component
export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);

  return (
    <ErrorContext.Provider value={{ error, setError }}>
      {children}
    </ErrorContext.Provider>
  );
};
