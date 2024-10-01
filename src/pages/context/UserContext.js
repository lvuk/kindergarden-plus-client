import { createContext, useContext, useState } from 'react';
import Cookies from 'js-cookie';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (data) => {
    const role = Cookies.get('role');
    console.log(role);
    setUser(data);
  };

  const logout = () => {
    setUser(null);
    Cookies.remove('token');
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
