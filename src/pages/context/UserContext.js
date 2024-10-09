import { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import {
  login as loginAPI,
  logout as logoutAPI,
} from '../../api/AuthController';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // const { setError } = useErrorContext();

  // Check for user cookie on initial render
  useEffect(() => {
    const userCookie = Cookies.get('user');
    console.log(userCookie); // Get user from cookies
    if (userCookie !== undefined) {
      const userData = JSON.parse(userCookie);
      setUser(userData); // Set user state if cookie exists
    }
    setUser(null);
    setLoading(false);
  }, []);

  const login = async ({ email, password }) => {
    const response = await loginAPI(email, password);

    if (response.error) {
      throw response.error;
    }

    Cookies.set('user', JSON.stringify(response.data.user), { expires: 2 }); // Set user cookie with expiry
    setUser(response.data.user); // Set user state
  };

  const logout = async () => {
    await logoutAPI();
    setUser(null);
    Cookies.remove('user');
    Cookies.remove('auth_token');
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
