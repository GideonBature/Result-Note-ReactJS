import React from 'react';

function TopNavBar() {
    return (
        <div className='flex justify-between items-center mt-5'>
            <h1 className="ml-24 text-3xl font-bold text-white">Welcome to Dashboard, Udemy School</h1>
            <ul className="flex text-xs font-semibold text-white mr-6">
                <li className="mr-4">
                    <button className="bg-secondaryColor px-6 py-1.5 rounded">Profile</button>
                </li>
                <li>
                    <button className="bg-secondaryColor px-6 py-1.5 rounded">Logout</button>
                </li>
            </ul>
        </div>
    );
}

export default TopNavBar;
