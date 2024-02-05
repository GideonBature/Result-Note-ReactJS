import React from 'react';
import Sidebar from './SideBar';

// higher-level wrapper to persist the sidebar across all pages
function Layout({ children }) {
    return (
        <div className="flex gap-8">
            <Sidebar />
            <div className="flex-1 mt-16 font-sans font-bold">
                {children}
            </div>
        </div>
    );
};

export default Layout;
