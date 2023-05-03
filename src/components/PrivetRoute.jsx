import { useAuthSelect } from '../hooks/UseAuthSelect';

import { Navigate } from 'react-router-dom';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuthSelect();

  return !isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
