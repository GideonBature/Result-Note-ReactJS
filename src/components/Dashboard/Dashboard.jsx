import React from 'react';
import SideBar from './SideBar';

function Dashboard() {
    return (
        <div className='flex gap-x-8'>
            <SideBar />
            <section className='mt-16 font-sans font-bold'>
                <h1>Welcome to your Dashboard!</h1>
            </section>
        </div>
    );
};

export default Dashboard;
