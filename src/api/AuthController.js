import axios from './axiosConfig';
import Cookies from 'js-cookie';

const register = async (req, res) => {
  const { email, password } = req.body;
};

const login = async (email, password) => {
  try {
    const response = await axios.post(
      '/auth/login',
      { email, password },
      { withCredentials: true }
    );
    return response;
  } catch (error) {
    return { error: error.response.data.errors[0] };
  }
};

const logout = async () => {
  try {
    await axios.get('/auth/logout', null, { withCredentials: false });
    return true;
  } catch (error) {
    return false;
  }
};

export { register, login, logout };
