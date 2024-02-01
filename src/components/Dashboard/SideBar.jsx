import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';
import mainlogo from '/src/assets/logo-RN.png';
// import DashboardContent from './Content';

const navLinks = [
    { icon: 'bx bx-grid-alt', text: 'Dashboard', link: '/Dashboard' },
    { icon: 'bx bxs-graduation', text: 'Student/Classes', link: '/Students' },
    { icon: 'bx bx-bar-chart-square', text: 'Exams', link: '/Exam' },
    { icon: 'bx bx-user', text: 'Teachers', link: '/Teachers' },
    { icon: 'bx bx-cog', text: 'Settings/profile', link: '/Settings' },
];

function SideBar() {

    const [open, setOpen] = useState(true);

    return (
        <div className='flex'>
            <div
                className={`${open ? 'w-56' : 'w-16'} p-5 h-screen duration-700 bg-blue-950 relative`}
            ><i
                // menu icon changes when the side bar is toggled open or close
                className={`bx ${open ? 'bx-menu-alt-right' : 'bx-menu'} absolute mt-2 text-white ${open ? 'top-4 right-4' : 'top-4 right-6'} cursor-pointer`}
                onClick={() => setOpen(!open)}
            ></i>
                {/* Main logo on Sidebar */}
                <div className={`w-24 mt-2 ml-auto mr-auto ${!open && "scale-0"}`}>
                    <img src={mainlogo} alt="" />
                </div>
                <ul className="flex-1 mt-8 space-y-8 font-normal font-sans">
                    {/* Search input */}
                    <li className="relative font-normal text-sm mb-4 -ml-3 -mr-2">
                        <i className={`bx bx-search absolute top-3 text-white ${!open ? 'right-3.5' : 'right-3'}`}></i>
                        <input
                            type="text"
                            placeholder="Search.."
                            className={`bg-sky-900 caret-cyan-600 p-2 placeholder:pl-8 w-full outline-none rounded-xl px-2 ${!open ? 'p-2 pr-4 right-0' : ''}`}
                        />
                    </li>
                    {/* Map through navLinks objs & render dynamically */}
                    {navLinks.map((link, index) => (
                        <li
                            key={index}
                            className={`group flex items-center hover:bg-cyan-600 rounded-xl p-2 ${!open ? 'hover:bg-cyan-600 pl-4 -ml-3 -mr-2.5 rounded-xl' : 'hover:bg-cyan-600 pl-4 -ml-3 -mr-2.5 rounded-xl'}`}
                        >
                            <a href={link.link} className="flex items-center">
                                <i className={link.icon + ' text-white'}></i>
                                <span className={`ml-2 pl-1 text-white ${!open && "hidden"}`}>{link.text}</span>
                                {/* Tooltip - mouse hover popup text beside icon when sidebar is closed */}
                                {!open ? (
                                    <span className={`tooltip ml-7 text-black text-xs font-serif font-thin bg-cyan-500 rounded p-1 px-2 pointer-events-none opacity-0 invisible scale-0 transition-transform transform group-hover:opacity-100 group-hover:visible group-hover:scale-100`}>{link.text}</span>
                                ) : null}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SideBar;

