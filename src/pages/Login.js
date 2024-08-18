import React from 'react';
import '../stylesheets/login.scss';
import Header from '../components/Header';

const Login = () => {
  return (
    <>
      <Header />
      <div className='login'>
        <div className='container'>
          <h1>Kindergarden+</h1>
          <h2>Login</h2>
          <form action='' className='form'>
            <input type='text' placeholder='email' />
            <input type='password' placeholder='password' />
            <button className='btn'>Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
