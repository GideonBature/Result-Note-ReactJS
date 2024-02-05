import React from 'react';

function Header() {
    return (
        <div className='font-normal bg-black font-sans text-xs text-white flex flex-row'>
            <ul className="flex p-2 ml-auto">
                <li className="mr-4">
                    <button className="bg-cyan-500 px-6 py-1.5 rounded">Profile</button>
                </li>
                <li>
                    <button className="bg-cyan-500 px-6 py-1.5 rounded">Logout</button>
                </li>
            </ul>
        </div>
    );
}

export default Header;
