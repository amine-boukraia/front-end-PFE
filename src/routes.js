import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
import PrivateOutlet from './HOC/PrivateOutlet';
//
import Schedule from './pages/Schedule';
import Docs from './pages/Docs';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import NewDoc from './pages/NewDoc';
import Products from './pages/Products';
import DashboardApp from './pages/DashboardApp';

// ----------------------------------------------------------------------

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
        { path: 'annoucement', element: <DashboardApp /> },
        { path: 'docs', element: <Docs /> },
        { path: 'docs/new', element: <NewDoc /> },
        { path: 'results', element: <Products /> },
        { path: 'schedule', element: <Schedule /> },
        { path: 'clubs/:id', element: <Schedule /> },
        { path: 'clubs', element: <Schedule /> },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/annoucement" /> },
        { path: 'login', element: <Login /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
