import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import CreateTrip from './create-trip';
import Layout from "./components/custom/Layout";
import About from './components/important/About';
import Contact from './components/important/Contact';
import Destinations from './components/important/destinations/Destinations.jsx';
import DestinationDetail from './components/important/destinations/DestinationDetail.jsx';
import Gear from './components/important/resources/gear/Gear';
import Resources from './components/important/resources/Resources.jsx';
import Videos from './components/important/resources/videos/Videos';
import Community from './components/important/community/Community.jsx';
import Blogs from './components/important/resources/blogs/Blogs.jsx';
import Courses from './components/important/resources/cources/Courses.jsx';

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
      { path: '/important/:destinationName', element: <DestinationDetail /> },
      { path: '/important/resources/gear', element: <Gear /> },
      { path: '/important/Resources', element: <Resources /> },
      { path: '/important/resources/videos', element: <Videos /> },
      { path: '/important/community', element: <Community /> },
      { path: '/important/resources/blogs', element: <Blogs /> },
      { path: '/important/resources/courses', element: <Courses /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);