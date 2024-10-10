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
    console.log('DOGODIO SE ERROR U AUTH');
    return { error: error.response.data.errors[0] };
  }
};

const logout = async () => {
  console.log('uso u logout');
  try {
    await axios.delete('/auth/logout', { withCredentials: true });
    return true;
  } catch (error) {
    return error;
  }
};

export { register, login, logout };
