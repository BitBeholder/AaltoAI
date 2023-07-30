import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black p-4">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center">
          <div className="text-white font-bold">AaltoAI</div>
          
          {/* Hamburger menu */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon icon={faBars} className="text-white" /> {/* Using Font Awesome for hamburger icon */}
            </button>
          </div>

          {/* Navigation links: hidden on small screens and visible on large screens */}
          <ul className={`flex space-x-4 ${isOpen ? 'block' : 'hidden'} lg:flex`}>
            <li><a href="#" className="text-purple-600 hover:text-purple-400">Home</a></li>
            <li><a href="#" className="text-purple-600 hover:text-purple-400">About</a></li>
            <li><a href="#" className="text-purple-600 hover:text-purple-400">Events</a></li>
            {/* Add other links similarly */}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
