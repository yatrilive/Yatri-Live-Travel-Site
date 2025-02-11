import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);

  // Toggle dropdown
  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (!event.target.closest('.dropdown-container')) {
      setOpenDropdown(null);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="p-2 shadow-md bg-gray-200 flex justify-between items-center px-5">

      <Link to="/"> <img src="/logo.svg" alt="Logo" className="h-10" /></Link>
      
      <div className="flex gap-6 text-[20px] font-semibold relative">
        <Link to="/" className="hover:text-blue-500"><h1>Home</h1></Link>
        <Link to="/important/About" className="hover:text-blue-500"><h1>About</h1></Link>
        <Link to="/important/Gear" className="hover:text-blue-500"><h1>Gear</h1></Link>

        {/* Resources Dropdown */}
        <div className="relative dropdown-container">
          <h1 
            className="hover:text-blue-500 cursor-pointer inline-flex items-center"
            onClick={() => toggleDropdown('resources')}
          >
            Resources
            <svg width="24" height="24" viewBox="0 0 24 24" className="ml-1">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </h1>

          {openDropdown === 'resources' && (
            <div className="absolute left-0 bg-white shadow-lg mt-2 rounded-lg z-10 w-48 transition-all duration-300 ease-in-out">
              <ul className="space-y-2 py-2 px-4">
                <li><Link to="/important/Tips" className="block text-gray-800 hover:text-blue-500">Tips & Tricks</Link></li>
                <li><Link to="/important/Blog" className="block text-gray-800 hover:text-blue-500">Blog</Link></li>
                <li><Link to="/important/Ebook" className="block text-gray-800 hover:text-blue-500">E-book</Link></li>
                <li><Link to="/important/Contact" className="block text-gray-800 hover:text-blue-500">Talk to Me</Link></li>
              </ul>
            </div>
          )}
        </div>

        {/* Destinations Dropdown */}
        <div className="relative dropdown-container">
          <h1 
            className="hover:text-blue-500 cursor-pointer inline-flex items-center"
            onClick={() => toggleDropdown('destinations')}
          >
            Destinations
            <svg width="24" height="24" viewBox="0 0 24 24" className="ml-1">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </h1>

          {openDropdown === 'destinations' && (
            <div className="absolute left-0 bg-white shadow-lg mt-2 rounded-lg z-10 w-48 transition-all duration-300 ease-in-out">
              <ul className="space-y-2 py-2 px-4">
                <li><Link to="/important/Asia" className="block text-gray-800 hover:text-blue-500">Asia</Link></li>
                <li><Link to="/important/Europe" className="block text-gray-800 hover:text-blue-500">Europe</Link></li>
                <li><Link to="/important/India" className="block text-gray-800 hover:text-blue-500">India</Link></li>
                <li><Link to="/important/China" className="block text-gray-800 hover:text-blue-500">China</Link></li>
              </ul>
            </div>
          )}
        </div>

        <Link to="/important/Videos" className="hover:text-blue-500"><h1>Videos</h1></Link>
        <Link to="/important/Contact" className="hover:text-blue-500"><h1>Contact</h1></Link>
      </div>

      <div className="flex gap-6 text-[20px] font-bold">
        <Button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg cursor-pointer transition duration-200 ease-in-out">
          Sign In
        </Button>
        <Button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-lg cursor-pointer transition duration-200 ease-in-out">
          Log In
        </Button>
      </div>
    </div>
  );
}

export default Header;
