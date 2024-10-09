import React from 'react';
import ReactDOM from 'react-dom/client';
import './stylesheets/index.scss';
import App from './App';
import { UserProvider } from './pages/context/UserContext';
import { ErrorProvider } from './pages/context/ErrorContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </ErrorProvider>
  </React.StrictMode>
);
