import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom/client';

import LoginPage from './LoginPage';
import MainPage from './MainPage';
import { UserProvider } from './contexts/UserContext';
import './index.css';

import UserContext from './contexts/UserContext';
import { EmailProvider } from './contexts/EmailContext';
import { ToastProvider } from './contexts/ToastContext';

// UserContext
// Provider, Consumer

function App() {
  const { user } = useContext(UserContext);
  return user ? <MainPage /> : <LoginPage />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ToastProvider>
    <UserProvider>
      <EmailProvider>
        <App />
      </EmailProvider>
    </UserProvider>
  </ToastProvider>
);
