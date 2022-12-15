/* eslint-disable react/prop-types */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import { useContext } from 'react';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Navbar from './components/navbar/Navbar';
import LeftBar from './components/leftBar/LeftBar';
import RightBar from './components/rightBar/RightBar';
import Profile from './pages/profile/Profile';
import Home from './pages/home/Home';

import './style.scss';
import { DarkModeContext } from './context/darkMode';
import { AuthContext } from './context/auth';

function App() {
  const { currentUser } = useContext(AuthContext);

  const { darkMode } = useContext(DarkModeContext);

  function Layout() {
    return (
      <div className={`theme-${darkMode ? 'dark' : 'light'} `}>
        <Navbar />
        <div style={{ display: 'flex' }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  }

  function ProtectedRoute({ children }) {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>),
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/profile/:id',
          element: <Profile />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
