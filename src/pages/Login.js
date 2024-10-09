import React, { useState } from 'react';
import '../stylesheets/login.scss';
import Header from '../components/Header';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from './context/UserContext';
import { useErrorContext } from './context/ErrorContext';

const Login = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const { error } = useErrorContext();
  const { login } = useUserContext();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Show loading message
    messageApi.open({
      type: 'loading',
      content: 'Logging in...',
      duration: 0, // duration 0 means it won't auto close
    });

    // Attempt to login
    try {
      await login({ ...values });
      // Close loading message and show success
      messageApi.destroy(); // Clear the loading message
      message.success('Login successful!', 2.5);
      navigate('/dashboard'); // Navigate to the dashboard
    } catch (error) {
      // Close loading message and show error
      messageApi.destroy(); // Clear the loading message
      message.error(`Login failed! ${error.message}`, 2.5);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <>
      {contextHolder}
      <Header />
      <div className='login'>
        <div className='container'>
          <h1>Kindergarden+</h1>
          <h2>Login</h2>
          <form className='form' onSubmit={handleSubmit}>
            <input
              type='text'
              name='email'
              placeholder='Email'
              value={values.email}
              onChange={handleChange}
            />
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={values.password}
              onChange={handleChange}
            />
            <button type='submit' className='btn'>
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
