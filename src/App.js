import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Error404 from './pages/Error404';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/parent/Dashboard';
import Events from './pages/parent/Events';
import Activities from './pages/parent/Activities';
import Feed from './pages/parent/Feed';
import Payments from './pages/parent/Payments';
import Profile from './pages/parent/ChildProfile';
import Inbox from './pages/parent/Inbox';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Error404 />} />
          <Route path='/' element={<MainLayout />}>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='events' element={<Events />} />
            <Route path='activities' element={<Activities />} />
            <Route path='inbox' element={<Inbox />} />
            <Route path='resources' element={<Feed />} />
            <Route path='payments' element={<Payments />} />
            <Route path='profile' element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
