import React from 'react';
import Sidebar from './SideBar';

function Layout({ children }) {
    return (
        <div className="flex gap-8">
            <Sidebar />
            <section className="flex-grow mt-4">
                {children}
            </section>
        </div>
    );
}

export default Layout;
