import React from 'react';
import 'boxicons/css/boxicons.min.css';

const navLinks = [
  { icon: 'bx bx-grid-alt', text: 'Dashboard', link: '#' },
  { icon: 'bx bx-user', text: 'Student/Classes', link: '#' },
  { icon: 'bx bx-bar-chart-square', text: 'Exams', link: '#' },
  { icon: 'bx bx-cog', text: 'Settings and profile', link: '#' },
];

function SideBar() {
  return (
    // Sidebar component
    <div className="sidebar fixed left-0 top-0 h-full w-56 bg-blue-950 p-2 z-50 transition-all duration-500 ease-in-out">
      <div className="logo-details">
        <div className="logo-name text-white font">ResultNote</div>
        <i className='bx bx-menu text-white top-56' id="btn"></i>

      </div>
      {/* Nav links from here */}
      <ul className="flex flex-col gap-y-8 ml-3 mt-20">
        <hr />
        {/* Search input */}
        <li className="relative font-normal text-sm">
          <i className='bx bx-search text-white absolute top-3 right-7 '></i>
          <input type="text" placeholder="Search.." className="bg-blue-900 p-2 rounded-xl px-2" />
        </li>
        {/* Map through navLinks objs & render dynamically */}
        {navLinks.map((link, index) => (
          <li key={index} className="flex items-center space-x-2">
            <a href={link.link} className="flex items-center font-normal text-sm">
              <i className={link.icon + ' text-white'}></i>
              <span className="ml-2 nav-menus text-white">{link.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
