import React from 'react';
import Sidebar from './Dashboard/SideBar';

// higher level wrapper to persist the sidebar in all navlinks  pages
function Layout({ children }) {
    return (
        <div className="flex gap-8 bg-white">
            <Sidebar />
            <section className="flex-grow mt-4 overflow-y-auto">
                {children}
            </section>
        </div>
    );
}

export default Layout;
