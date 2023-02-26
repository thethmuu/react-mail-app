import { createContext, useContext, useState } from 'react';
import { FAKE_USER } from '../api';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(FAKE_USER);
  const login = (user) => setUser(user);
  const logout = () => setUser(null);

  const contextValue = {
    user,
    login,
    logout,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

export default UserContext;

export function useUserContext() {
  return useContext(UserContext);
}
