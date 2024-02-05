import React from 'react';
import Sidebar from './SideBar';

function Layout({ children }) {
    return (
        <div className="flex gap-7 bg-red-300">
            <Sidebar />
                {children}
        </div>
    );
}

export default Layout;
