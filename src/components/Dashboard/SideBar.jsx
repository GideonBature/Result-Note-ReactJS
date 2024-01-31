import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';
import mainlogo from '/src/assets/logo-RN.png';
// import DashboardContent from './Content';

const navLinks = [
    { icon: 'bx bx-grid-alt', text: 'Dashboard', link: '#' },
    { icon: 'bx bxs-graduation', text: 'Student/Classes', link: '#' },
    { icon: 'bx bx-bar-chart-square', text: 'Exams', link: '#' },
    { icon: 'bx bx-user', text: 'Teachers', link: '#' },
    { icon: 'bx bx-cog', text: 'Settings/profile', link: '#' },
];

function SideBar() {
    const [open, setOpen] = useState(true);

    return (
        // Sidebar component
        <div className='flex'>
            <div className={`${open ? 'w-56' : 'w-16'} p-5 h-screen duration-700 bg-blue-950 relative`}>
                {/* nav_menu icon when sidebar is toggled */}
                {open ? (
                    <i className='bx bx-menu-alt-right absolute mt-2 text-white top-4 right-4 cursor-pointer' onClick={() => setOpen(!open)}></i>
                ) : (
                    <i className='bx bx-menu absolute text-white mt-2 top-4 right-6 cursor-pointer' onClick={() => setOpen(!open)}></i>
                )}
                {/* Dashboard logo */}
                <div className={`w-24 mt-2 ml-auto mr-auto ${!open && "scale-0"}`}>
                    <img src={mainlogo} alt="" />
                </div>
                <ul className="flex-1 mt-8 space-y-8">

                    {/* Search input */}
                    <li className="relative font-normal text-sm mb-4 -ml-3 -mr-2">
                        <i className={`bx bx-search absolute top-3 text-white ${!open ? 'right-3.5' : 'right-3'}`}></i>
                        <input
                            type="text" placeholder="Search.."
                            className={`bg-sky-900 caret-cyan-600 p-2 placeholder:pl-8 w-full outline-none rounded-xl px-2 ${!open ? 'p-2 pr-4 right-0' : ''}`}
                        />
                    </li>
                    {/* Map through navLinks objs & render dynamically */}
                    {navLinks.map((link, index) => (
                        <li key={index} className={`flex items-center hover:bg-cyan-600 rounded-xl p-2 px-1 ${!open ? 'hover:bg-cyan-600 pl-4 -ml-3 -mr-2 rounded-xl' : 'p-2 px-1'}`}>
                            <a href={link.link} className="flex items-center font-normal text-sm">
                                <i className={link.icon + ' text-white'}></i>
                                <span className={`ml-2 pl-1 text-white ${!open && "scale-0"}`}>{link.text}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    );
}

export default SideBar;
