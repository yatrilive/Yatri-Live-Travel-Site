import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import CreateTrip from './create-trip';
import Layout from "./components/custom/Layout";
import About from './components/important/About';
import Contact from './components/important/Contact';
import Destinations from './components/important/Destinations';
import Gear from './components/important/Gear';
import Resources from './components/important/Resources';
import Videos from './components/important/Videos';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <App /> },
      { path: '/create-trip', element: <CreateTrip /> },
      { path: '/important/About', element: <About /> },
      { path: '/important/Contact', element: <Contact /> },
      { path: '/important/Destinations', element: <Destinations /> },
      { path: '/important/Gear', element: <Gear /> },
      { path: '/important/Resources', element: <Resources /> },
      { path: '/important/Videos', element: <Videos /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);