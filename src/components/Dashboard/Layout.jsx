import React from 'react';
import Sidebar from './SideBar';

// higher-level wrapper to persist the sidebar across all pages
function Layout({ children }) {
    return (
        <div className="flex gap-7 bg-red-300">
            <Sidebar />
            <div className="flex mt-4 font-sans font-bold">
                {children}
            </div>
        </div>
    );
};

export default Layout;
