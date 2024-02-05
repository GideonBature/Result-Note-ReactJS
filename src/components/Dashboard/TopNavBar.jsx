import React from 'react';
import { Link } from 'react-router-dom';

const navBarLinks = [
    { name: 'Profile', path: '/Settings' },
    { name: 'Logout', path: '#' }
];

function TopNavBar() {
    return (
        <div className='flex justify-between items-center mt-5'>
            <h1 className="ml-24 text-3xl font-bold text-white">Welcome to Dashboard, Udemy School</h1>
            <ul className="flex text-xs font-semibold text-white mr-6">
                {navBarLinks.map((navLink, index) => (
                    <li key={index} className='mr-4'>
                        <Link to={navLink.path}>
                            <button className="bg-secondaryColor hover:bg-sky-700 px-6 py-1.5 rounded">{navLink.name}</button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TopNavBar;
