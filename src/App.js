import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Error404 from './pages/Error404';
import MainLayout from './components/MainLayout';
import ParentDashboard from './pages/parent/ParentDashboard';
import Events from './pages/Events';
import Activities from './pages/parent/Activities';
import Feed from './pages/parent/Feed';
import Payments from './pages/parent/Payments';
import Profile from './pages/parent/ChildProfile';
import Inbox from './pages/Inbox';
import MyGroup from './pages/teacher/MyGroup';
import Notes from './pages/teacher/Notes';
import WorkLog from './pages/teacher/WorkLog';
import ProfessionalProfile from './pages/teacher/ProfessionalProfile';
import { useUserContext } from './pages/context/UserContext';
import TeacherDashboard from './pages/teacher/TeacherDashboard';
import ProtectedRoutes from './components/ProtectedRoute';
import { useEffect } from 'react';
import Attendance from './pages/teacher/Attendance';
import Employees from './pages/manager/Employees';
import Children from './pages/manager/Children';
import Attendances from './pages/manager/Attendances';
import Groups from './pages/manager/Groups';
import MyKindergarden from './pages/manager/MyKindergarden';
import PedagogicalDocuments from './pages/manager/PedagogicalDocuments';
import WorkDays from './pages/manager/WorkDays';

function App() {
  const { user } = useUserContext();

  useEffect(() => {
    console.log(user);
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Error404 />} />
        <Route path='/' element={<MainLayout />}>
          {/* PROTECTED ROUTES FOR EVERYONE */}
          <Route
            element={<ProtectedRoutes requiredRole={'PARENT' || 'ADMIN'} />}
          >
            <Route
              path='dashboard'
              element={
                user?.role === 'PARENT' || user?.role === 'ADMIN' ? (
                  (console.log('Parent Dashboard'), (<ParentDashboard />))
                ) : (
                  <TeacherDashboard />
                )
              }
            />
          </Route>
          <Route path='inbox' element={<Inbox />} />
          <Route path='events' element={<Events />} />

          {/* PROTECTED ROUTES FOR TEACHERS */}
          <Route element={<ProtectedRoutes requiredRole={'TEACHER'} />}>
            <Route path='my-group' element={<MyGroup />} />
            <Route
              path='professional-profile'
              element={<ProfessionalProfile />}
            />
            <Route path='attendance' element={<Attendance />} />
            <Route path='work-log' element={<WorkLog />} />
            <Route path='notes' element={<Notes />} />
          </Route>
          {/* PROTECTED ROUTES FOR PARENTS */}
          <Route element={<ProtectedRoutes requiredRole={'PARENT'} />}>
            <Route path='activities' element={<Activities />} />
            <Route path='resources' element={<Feed />} />
            <Route path='payments' element={<Payments />} />
            <Route path='profile' element={<Profile />} />
          </Route>

          {/* PROTECTED ROUTES FOR MANAGER */}
          <Route element={<ProtectedRoutes requiredRole={'MANAGER'} />}>
            <Route path='employees' element={<Employees />} />
            <Route path='children' element={<Children />} />
            <Route path='attendances' element={<Attendances />} />
            <Route path='groups' element={<Groups />} />
            <Route path='my-kindergarden' element={<MyKindergarden />} />
            <Route
              path='pedagogical-documents'
              elements={<PedagogicalDocuments />}
            />
            <Route path='work-days' element={<WorkDays />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
