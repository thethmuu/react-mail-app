import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { fetchEmails, fetchLatestEmails } from '../api';
import { useUserContext } from './UserContext';

const EmailContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'init':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'succeed':
      return {
        ...state,
        loading: false,
        emails: action.payload,
      };
    case 'error':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'select_email':
      return {
        ...state,
        currentEmail: action.payload,
      };
    case 'add_more_emails':
      return {
        ...state,
        emails: [...state.emails, ...action.payload],
      };
  }
}

export function EmailProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    emails: [],
    loading: false,
    error: null,
    currentEmail: null,
  });
  const { user } = useUserContext();

  useEffect(() => {
    dispatch({ type: 'init' });
    fetchEmails()
      .then((emails) => dispatch({ type: 'succeed', payload: emails }))
      .catch((error) => dispatch({ type: 'error', payload: error }));
  }, []);

  useEffect(() => {
    function refreshMails() {
      if (!state.loading) {
        fetchLatestEmails().then((emails) => {
          dispatch({ type: 'add_more_emails', payload: emails });
        });
      }
    }
    let timer;
    if (user) {
      timer = setInterval(refreshMails, 3000);
    }

    return () => clearInterval(timer);
  });

  function setCurrentEmail(email) {
    dispatch({ type: 'select_email', payload: email });
  }

  const contextValue = {
    ...state,
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
