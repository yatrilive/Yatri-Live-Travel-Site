import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer'; // Import the Footer component

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header /> {/* Always render Header at the top */}
      <main className="flex-grow">
        <Outlet /> {/* Nested routes will render here */}
      </main>
      <Footer /> {/* Always render Footer at the bottom */}
    </div>
  );
};

export default Layout;