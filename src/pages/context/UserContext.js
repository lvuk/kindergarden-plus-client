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

  // Check for user cookie on initial render
  useEffect(() => {
    const userCookie = Cookies.get('user');
    if (userCookie) {
      const userData = JSON.parse(userCookie);
      setUser(userData);
      console.log('User loaded from cookies:', userData);
    } else {
      setUser(null);
    }
    setLoading(false);
  }, []);

  const login = async ({ email, password }) => {
    const response = await loginAPI(email, password); // Do not wrap in try/catch

    // Check for error in the response
    if (response.error) {
      throw response.error; // Throw the error to be caught in the UI
    }
    // If there are no errors, proceed with setting user data
    Cookies.set('user', JSON.stringify(response.data.user), { expires: 2 });
    setUser(response.data.user); // Set user state
    return response;
  };

  const logout = async () => {
    await logoutAPI();
    setUser(null);
    Cookies.remove('user');
  };

  return (
    <UserContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </UserContext.Provider>
  );
}
