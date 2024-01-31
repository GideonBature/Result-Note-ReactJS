import React from 'react';
import SideBar from '../components/Dashboard/SideBar';

function Students() {
    return (
        <div className='flex gap-x-8'>
            <SideBar />
            <section className='mt-16 font-sans font-bold'>
                <h1>Students</h1>
            </section>
        </div>
    );
};

export default Students;


