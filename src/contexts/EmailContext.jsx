import { createContext, useContext, useEffect, useState } from 'react';
import { fetchEmails } from '../api';

const EmailContext = createContext();

export function EmailProvider({ children }) {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentEmail, setCurrentEmail] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchEmails()
      .then((emails) => setEmails(emails))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  const contextValue = {
    emails,
    loading,
    error,
    currentEmail,
    setCurrentEmail,
  };

  return (
    <EmailContext.Provider value={contextValue}>
      {children}
    </EmailContext.Provider>
  );
}

export function useEmailContext() {
  return useContext(EmailContext);
}
