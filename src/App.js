import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Error404 from './pages/Error404';
import MainLayout from './components/MainLayout';
import ParentDashboard from './pages/parent/ParentDashboard';
import Events from './pages/parent/Events';
import Activities from './pages/parent/Activities';
import Feed from './pages/parent/Feed';
import Payments from './pages/parent/Payments';
import Profile from './pages/parent/ChildProfile';
import Inbox from './pages/parent/Inbox';
import { useUserContext } from './pages/context/UserContext';
import TeacherDashboard from './pages/teacher/TeacherDashboard';
import ProtectedRoutes from './components/ProtectedRoute';

function App() {
  const { user } = useUserContext();
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Error404 />} />
          <Route path='/' element={<MainLayout />}>
            {/* PROTECTED ROUTES FOR EVERYONE */}
            <Route element={<ProtectedRoutes />}>
              <Route
                path='dashboard'
                element={
                  user?.role === 'parent' || 'admin' ? (
                    <ParentDashboard />
                  ) : (
                    <TeacherDashboard />
                  )
                }
              />
            </Route>
            <Route element={<ProtectedRoutes requiredRole={'admin'} />}>
              <Route path='events' element={<Events />} />
              <Route path='activities' element={<Activities />} />
              <Route path='inbox' element={<Inbox />} />
              <Route path='resources' element={<Feed />} />
              <Route path='payments' element={<Payments />} />
              <Route path='profile' element={<Profile />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
