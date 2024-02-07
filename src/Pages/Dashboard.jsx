import React from 'react';
import Layout from '../components/Layout';
import Analytics from '../components/Dashboard/Analytics';
import TopNavBar from '../components/Dashboard/TopNavBar';

function Dashboard() {
    return (
        <Layout>
            <div className='font-bold text-normal text-black'>
                <div className='text-3xl mr-32 text-center'>
                    <h1 className='mt-2'>Welcome to your dashboard BenHub Academy!</h1>
                </div>
                <TopNavBar />
                <Analytics />
            </div>
        </Layout>
    );
}

export default Dashboard;
