import React from 'react';
import { Link } from 'react-router-dom';

const navBarLinks = [
    { name: 'Profile', path: '/Settings' },
    { name: 'Logout', path: '#' }
];

function TopNavBar() {
    return (
        <div className='flex-1'>
            <div className='fixed top-1 right-2 z-50 p-4'>
                <ul className="flex text-xs font-semibold text-white">
                    {navBarLinks.map((navLink, index) => (
                        <li key={index} className='mr-4'>
                            <Link to={navLink.path}>
                                <button className="bg-secondaryColor hover:bg-sky-700 px-6 py-1.5 rounded">{navLink.name}</button>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TopNavBar;
