import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
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
