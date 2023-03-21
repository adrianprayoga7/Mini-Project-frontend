import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import LeftBar from './components/leftBar/LeftBar';
import RightBar from './components/rightBar/RightBar';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import './style.scss';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/authContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Fgames from './pages/fGames/Fgames';
import Facc from './pages/fAcc/Facc';
import Fcomp from './pages/fComp/Fcomp';
import Fevent from './pages/fEvent/Fevent';
import Fhardware from './pages/fHardware/Fhardware';

function App() {
  //menggunakan children dari class authContext
  const { currentUser } = useContext(AuthContext);

  //menggunakan children dari class Darkmodecontext
  const { darkMode } = useContext(DarkModeContext);

  //deklarasi queryClient
  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
          <Navbar />
          <div style={{ display: 'flex' }}>
            <LeftBar />
            <div style={{ flex: 6 }}>
              <Outlet />
            </div>
            <RightBar />
          </div>
        </div>
      </QueryClientProvider>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  //set router dari setiap page
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/profile/:id',
          element: <Profile />,
        },
        {
          path: '/fgames',
          element: <Fgames />,
        },
        {
          path: '/facc',
          element: <Facc />,
        },
        {
          path: '/fcomp',
          element: <Fcomp />,
        },
        {
          path: 'fevent',
          element: <Fevent />,
        },
        {
          path: 'fhardware',
          element: <Fhardware />,
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
