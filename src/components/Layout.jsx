import React from 'react';
import Sidebar from './Dashboard/SideBar';

function Layout({ children }) {
    return (
        <div className="flex gap-8 bg-white">
            <Sidebar />
            <section className="flex-grow mt-4">
                {children}
            </section>
        </div>
    );
}

export default Layout;
