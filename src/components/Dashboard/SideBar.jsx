import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';
import mainlogo from '/src/assets/logo-RN.png';
import { Link } from 'react-router-dom';

const navLinks = [
    { icon: 'bx bx-grid-alt', text: 'Dashboard', path: '/Dashboard' },
    { icon: 'bx bxs-graduation', text: 'Student/Classes', path: '/Students' },
    { icon: 'bx bx-bar-chart-square', text: 'Examinations', path: '/Exam' },
    { icon: 'bx bx-user', text: 'Teachers', path: '/Teachers' },
    { icon: 'bx bx-cog', text: 'Settings/profile', path: '/Settings' },
];

function SideBar() {
    const [open, setOpen] = useState(true);
    const sidebarWidth = open ? 'w-56' : 'w-16';

    // Sidebar toggle
    const toggleSidebar = () => { setOpen(!open) };

    return (
        <>
            <div className={`${sidebarWidth} p-5 h-screen duration-700 bg-primaryColor relative `}
            ><i
                // menu icon changes when the side bar is toggled open or close
                className={`bx ${open ? 'bx-menu-alt-right' : 'bx-menu'} absolute mt-2 text-white ${open ? 'top-4 right-4' : 'top-4 right-6'} cursor-pointer`}
                onClick={toggleSidebar}
            ></i>
                {/* Main logo on Sidebar */}
                <div className={`w-24 mt-2 ml-auto mr-auto ${!open && "scale-0"}`}>
                    <img src={mainlogo} alt="AppLogo" />
                </div>
                {/* Search input */}
                <div className="relative font-normal mt-9 -ml-3 -mr-2">
                    <i className={`bx bx-search absolute pointer-events-none top-3 text-white ${!open ? 'right-3.5' : 'right-3'}`}></i>
                    <input type="text" placeholder="Search.."
                        className={`bg-sky-900 p-2 placeholder:pl-8 w-full rounded-xl px-2 ${!open ? 'p-2 pr-4 right-0' : ''}`} onClick={() => { if (!open) toggleSidebar(); }} />
                </div>
                {/* Sidebar Navlinks */}
                <div className='flex-1 mt-5 space-y-2 duration-700'>
                    {/* Map through navLinks objs & render dynamically */}
                    {navLinks.map((navMenuLink, index) => (
                        <li key={index} className={`group flex items-center hover:bg-secondaryColor rounded-xl p-2 ${!open ? 'hover:bg-secondaryColor pl-4 -ml-3 -mr-2.5 rounded-xl duration-700' : 'hover:bg-secondaryColor pl-4 -ml-3 -mr-2.5 rounded-xl'}`} >
                            <Link to={navMenuLink.path} className="flex items-center">
                                <i className={navMenuLink.icon + ' text-white'}></i>
                                <span className={`ml-2 pl-1 duration-700 text-white ${!open && "hidden"}`}>{navMenuLink.text}</span>
                                {/* Tooltip - hover text when sidebar is closed */}
                                {!open ? (
                                    <span className={`tooltip ml-7 cursor-default text-black text-xs font-semibold bg-secondaryColor rounded p-1 px-2 opacity-0 invisible scale-0 transition-transform transform group-hover:opacity-100 group-hover:visible group-hover:scale-100`} onClick={(e) => e.preventDefault()}>{navMenuLink.text}</span>
                                ) : null}
                            </Link>
                        </li>
                    ))}
                </div>
            </div>
        </>
    );
}

export default SideBar;
