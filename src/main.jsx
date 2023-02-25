import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import LoginPage from './LoginPage';
import MainPage from './MainPage';
import './index.css';

import UserContext from './contexts/UserContext';

// UserContext
// Provider, Consumer

function App() {
  const [user, setUser] = useState(null);
  const login = (user) => setUser(user);
  const logout = () => setUser(null);

  const contextValue = {
    user,
    login,
    logout,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {user ? <MainPage /> : <LoginPage />}
    </UserContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
