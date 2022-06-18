import { Navigate, Outlet, useLocation, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
import PrivateOutlet from './HOC/PrivateOutlet';
//
import Schedule from './pages/Schedule';
import Docs from './pages/Docs';
import Students from './pages/Students';

import Blog from './pages/Blog';
import NewAnnouncement from './pages/NewAnnouncement';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import NewDoc from './pages/NewDoc';
import Groups from './pages/Groups';
import Products from './pages/Products';
import DashboardApp from './pages/DashboardApp';
import NewStudentForm from './sections/@dashboard/Forms/NewStudentForm';
import NewScheduleForm from './sections/@dashboard/Forms/NewScheduleForm';
import NewAssignmentForm from './sections/@dashboard/Forms/NewAssignment';
import Assignment from './pages/Assignment';

// ----------------------------------------------------------------------

function AdminRoute() {
  const userType = localStorage.getItem('userType');
  const url = {
    student: '',
    teacher: '/professor',
    admin: '/admin',
  };
  return userType !== 'admin' ? <Navigate to={`/dashboard${url[userType] || url.student}/announcement`} /> : <Outlet />;
}
function ProfessorRoute() {
  const userType = localStorage.getItem('userType');
  const url = {
    student: '',
    teacher: '/professor',
    admin: '/admin',
  };
  return userType !== 'teacher' ? (
    <Navigate to={`/dashboard${url[userType] || url.student}/announcement`} />
  ) : (
    <Outlet />
  );
}

function StudentRoute() {
  const userType = localStorage.getItem('userType');
  const url = {
    student: '',
    teacher: '/professor',
    admin: '/admin',
  };
  return userType !== 'student' ? (
    <Navigate to={`/dashboard${url[userType] || url.student}/announcement`} />
  ) : (
    <Outlet />
  );
}

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: (
        <PrivateOutlet>
          <DashboardLayout />
        </PrivateOutlet>
      ),
      children: [
        {
          path: '',
          element: <StudentRoute />,
          children: [
            { path: 'announcement', element: <DashboardApp /> },
            { path: 'docs', element: <Docs /> },
            { path: 'docs/new', element: <NewDoc /> },
            { path: 'results', element: <Products /> },
            { path: 'schedule', element: <Schedule /> },
            { path: 'clubs/:id', element: <Schedule /> },
            { path: 'clubs', element: <Schedule /> },
            { path: 'assignment', element: <Assignment /> },
          ],
        },
        {
          path: 'admin',
          element: <AdminRoute />,
          children: [
            { path: 'announcement', element: <DashboardApp /> },
            { path: 'announcement/new', element: <NewAnnouncement /> },
            { path: 'schedule/:id', element: <Schedule /> },
            { path: 'students', element: <Students /> },
            { path: 'students/new', element: <NewStudentForm /> },
            { path: 'schedule/new', element: <NewScheduleForm /> },
            { path: 'docs', element: <Docs /> },
            { path: 'docs/new', element: <NewDoc /> },
            { path: 'groups', element: <Groups /> },
          ],
        },
        {
          path: 'professor',
          element: <ProfessorRoute />,
          children: [
            { path: 'announcement', element: <DashboardApp /> },
            { path: 'schedule', element: <Schedule /> },
            { path: 'docs', element: <Docs /> },
            { path: 'docs/new', element: <NewDoc /> },
            { path: 'assignment', element: <Assignment /> },
            { path: 'assignment/new', element: <NewAssignmentForm /> },
          ],
        },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/announcement" /> },
        { path: 'login', element: <Login /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
