import React from 'react';
import '../stylesheets/login.scss';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <>
      <Header />
      <div className='login'>
        <div className='container'>
          <h1>Kindergarden+</h1>
          <h2>Login</h2>
          <form className='form' onSubmit={handleSubmit}>
            <input type='text' placeholder='Email' />
            <input type='password' placeholder='Password' />
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
