import { Outlet, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function PrivateOutlet({ children }) {
  const auth = useAuth();
  return auth ? children : <Navigate to="/login" />;
}
