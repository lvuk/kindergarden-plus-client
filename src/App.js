import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Error404 from './pages/Error404';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
